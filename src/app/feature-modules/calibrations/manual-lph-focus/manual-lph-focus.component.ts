import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManualLphFocusCalibrationOperationModel, ManualLphFocusCalibrationOperationLphData, ManualLphFocusCalculationData, LphFocusScanBasePosition } from 'calibrations-api';
import { MEStationID, LphEntityKey } from 'common-api';
import { CalibrationStatus, StartStopOperationAdapter } from 'hp-base-classes';

@Component({
  selector: 'app-manual-lph-focus',
  templateUrl: './manual-lph-focus.component.html'
})
export class ManualLphFocusComponent implements OnInit, OnDestroy  {
  @Output() onClose = new EventEmitter<void>();
  public operation;
  public operationChanged = new EventEmitter<any>();
  public lphFocusOperationAdapter: StartStopOperationAdapter;
  calibrationStatusValues = CalibrationStatus; // this is required for ngSwitchCase
  lphFocusScanBasePositionValues = LphFocusScanBasePosition; // this is required for the combobox

  private _operationSubscription: Subscription;
  public lphs: any = [
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation1), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false },
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation2), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false },
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation3), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false },
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation4), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false },
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation5), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false },
    { LphEntityKey: new LphEntityKey(MEStationID.MEStation6), LphFocusScanBasePosition: LphFocusScanBasePosition.LastCalibratedPosition, LphFocusCalculationData : new ManualLphFocusCalculationData(), IsSelected: false }
  ]

  constructor(private manualLphFocusOperationModel: ManualLphFocusCalibrationOperationModel) {
    this.lphFocusOperationAdapter = new StartStopOperationAdapter(manualLphFocusOperationModel);
  }

  onUpdateLphSelection()
  {
      this.operation.Data.LphData = this.getSelectedLphs();
      this.update();
  }

  getSelectedLphs() : ManualLphFocusCalibrationOperationLphData[]
  {
      return this.lphs.filter(lph => lph.IsSelected).map(lph => new ManualLphFocusCalibrationOperationLphData(lph.LphEntityKey, lph.LphFocusScanBasePosition, lph.LphFocusCalculationData));
  }

  ngOnInit() {
    this._operationSubscription = this.manualLphFocusOperationModel.observable.subscribe(op =>
      {
        this.updateOperation(op);

        this.lphs.forEach(lph => {
          var lphData  = op.Data.LphData.find(l => l.LphKey.ID == lph.LphEntityKey.ID);
          if(lphData == null) return;
          lph.IsSelected = true;
          lph.LphFocusScanBasePosition = lphData.LphFocusScanBasePosition;
        });
      });
  }

  ngOnDestroy() {
    this._operationSubscription.unsubscribe();
  }

  closeComponent(){
    this.onClose.emit();
  }

  cancel() {
      this.manualLphFocusOperationModel.cancel(this.operation).then(() => this.closeComponent());
  }

  commit() {
    this.manualLphFocusOperationModel.commit(this.operation).then(() => this.closeComponent());
  }

  public update() {
      this.manualLphFocusOperationModel.update(this.operation);
  }

  updateOperation(operation) {
    this.operation = operation;
  }
}
