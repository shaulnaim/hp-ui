import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalibrationStatus, StartStopOperationAdapter } from 'hp-base-classes';
import { BidStationID, BidStationKey } from 'common-api';
import { StiRCalibrationOperationModel, StiRCalibrationOperation } from 'calibrations-api';

@Component({
  selector: 'app-stir',
  templateUrl: './stir.component.html',
  styleUrls: ['./stir.component.scss']
})
export class StiRComponent implements OnInit, OnDestroy  {
  @Output() onClose = new EventEmitter<void>();

  private _operationSubscription: Subscription;
  public calibrationStatusValues = CalibrationStatus; // this is required for ngSwitchCase
  public operation: StiRCalibrationOperation;
  public selectedBidStationID: BidStationID;
  public selectedBidStationKey: BidStationKey;
  public bidstationKeys: string[] = [];
  public heatBuildBlanketCycles: number;
  public cleanBuildBlanketCycles: number;
  public stiROperationAdapter: StartStopOperationAdapter;


  constructor(private stiROperationModel: StiRCalibrationOperationModel) {
    this.stiROperationAdapter = new StartStopOperationAdapter(stiROperationModel);

  }

  ngOnInit() {
    this.bidstationKeys = Object.keys(BidStationID)
      .map(key => BidStationID[key])
      .filter((value, index) => index % 2 === 0)
      .filter(value => typeof value === 'string') as string[];
      this._operationSubscription = this.stiROperationModel.observable.subscribe(op => {
      this.updateOperation(op);
      this.selectedBidStationID = op.Data.SelectedBidStationKey.ID;
      this.selectedBidStationKey = op.Data.SelectedBidStationKey;
      this.heatBuildBlanketCycles = op.Data.HeatNumberOfBlanketCycles;
      this.cleanBuildBlanketCycles = op.Data.CleanNumberOfBlanketCycles;
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

  closeComponent() {
    this.onClose.emit();
  }

  cancel() {
    this.stiROperationModel.cancel(this.operation).then(() => this.closeComponent());
  }

  commit() {
    this.stiROperationModel.commit(this.operation).then(() => this.closeComponent());;
  }

  public update() {
      this.stiROperationModel.update(this.operation);
  }

  updateOperation(operation) {
    this.operation = operation;
  }

  heatBuildNumOfCyclesOnBlur(numberOfCycles) {
    this.operation.Data.HeatNumberOfBlanketCycles = numberOfCycles;
    this.update();
  }

  cleanBuildNumOfCyclesOnBlur(numberOfCycles) {
    this.operation.Data.CleanNumberOfBlanketCycles = numberOfCycles;
    this.update();
  }
}
