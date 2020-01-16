import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutoBiasCalibrationOperationModel } from 'calibrations-api';
import { MEStationEntityKey, MEStationID } from 'common-api';
import { CalibrationStatus, StartStopOperationAdapter } from 'hp-base-classes';

@Component({
  selector: 'app-auto-bias',
  templateUrl: './auto-bias.component.html'
})
export class AutoBiasComponent implements OnInit, OnDestroy  {
  @Output() onClose = new EventEmitter<void>();
  public operation;
  public operationChanged = new EventEmitter<any>();
  public autoBiasOperationAdapter: StartStopOperationAdapter;

  calibrationStatusValues = CalibrationStatus; // this is required for ngSwitchCase
  private _operationSubscription: Subscription;
  private _meStationValues = MEStationID;
  public meStations: any = [
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation1), IsSelected : false},
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation2), IsSelected : false},
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation3), IsSelected : false},
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation4), IsSelected : false},
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation5), IsSelected : false},
    { MEStationEntityKey: new MEStationEntityKey(MEStationID.MEStation6), IsSelected : false},
  ]

  constructor(private autoBiasOperationModel: AutoBiasCalibrationOperationModel) {
    this.autoBiasOperationAdapter = new StartStopOperationAdapter(autoBiasOperationModel);
  }

  onToggleMEStationSelection()
  {
      this.operation.Data.SelectedMEStations = this.getSelectedMEStations();
      this.update();
  }

  getSelectedMEStations() : MEStationEntityKey[]
  {
      return this.meStations.filter(meStation => meStation.IsSelected).map(meStation => meStation.MEStationEntityKey);
  }

  ngOnInit() {
    this._operationSubscription = this.autoBiasOperationModel.observable.subscribe(op =>
      {
        this.updateOperation(op);

        this.meStations.forEach(meStation => meStation.IsSelected = op.Data.SelectedMEStations.some(s => s.ID == meStation.MEStationEntityKey.ID));
      });
  }

  ngOnDestroy() {
    this._operationSubscription.unsubscribe();
  }

  closeComponent(){
    this.onClose.emit();
  }

  cancel() {
      this.autoBiasOperationModel.cancel(this.operation).then(() => this.closeComponent());
  }

  commit() {
    this.autoBiasOperationModel.commit(this.operation).then(() => this.closeComponent());
  }

  public update() {
      this.autoBiasOperationModel.update(this.operation);
  }

  updateOperation(operation) {
    this.operation = operation;
  }
}
