import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalibrationStatus, OperationStates, StartStopOperationAdapter } from 'hp-base-classes';
import { BidStationID, BidStationKey } from 'common-api';
import { CleanerCalibrationOperationModel, CleanerCalibrationOperation } from 'calibrations-api';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.scss']
})
export class CleanerComponent implements OnInit, OnDestroy  {
  @Output() onClose = new EventEmitter<void>();


  private _operationSubscription: Subscription;
  public calibrationStatusValues = CalibrationStatus; // this is required for ngSwitchCase
  public operation: CleanerCalibrationOperation;
  public selectedBidStationID: BidStationID;
  public selectedBidStationKey: BidStationKey;
  public BidstationKeys: string[] = [];
  public cleanBuildBlanketCycles: number;
  public cleanerOperationAdapter: StartStopOperationAdapter;


  constructor(private cleanerOperationModel: CleanerCalibrationOperationModel) {
    this.cleanerOperationAdapter = new StartStopOperationAdapter(cleanerOperationModel);

  }

  ngOnInit() {
     this.BidstationKeys = Object.keys(BidStationID)
       .map(key => BidStationID[key])
       .filter((value, index) => index % 2 === 0)
       .filter(value => typeof value === 'string') as string[];
        this._operationSubscription = this.cleanerOperationModel.observable.subscribe(op => {
        this.updateOperation(op);
        this.selectedBidStationKey = op.Data.SelectedBidStationKey;
        this.selectedBidStationID = op.Data.SelectedBidStationKey.ID;
        this.cleanBuildBlanketCycles = this.operation.Data.CleanNumberOfBlanketCycles;
      });
  }

  ngOnDestroy() {
     this._operationSubscription.unsubscribe();
   }

  onSelectedBidStationClick(stationID) {
     this.selectedBidStationID = stationID;
     this.selectedBidStationKey = new BidStationKey(this.selectedBidStationID);
    this.operation.Data.SelectedBidStationKey = new BidStationKey(this.selectedBidStationID);
    this.update();
  }

  cleanBuildNumOfCyclesOnBlur(numberOfCycles) {
    this.operation.Data.CleanNumberOfBlanketCycles = numberOfCycles;
  }


   closeComponent() {
    this.onClose.emit();
   }

   public update() {
    this.cleanerOperationModel.update(this.operation);
   }

   cancel() {
    this.cleanerOperationModel.cancel(this.operation).then(() => this.closeComponent());
  }

  commit() {
    this.cleanerOperationModel.commit(this.operation).then(() => this.closeComponent());
  }

  updateOperation(operation) {
    this.operation = operation;
  }
}
