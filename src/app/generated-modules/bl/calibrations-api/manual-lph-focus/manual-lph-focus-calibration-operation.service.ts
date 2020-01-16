import { Injectable } from '@angular/core';
import { StartStopOperationServiceBase } from 'hp-base-classes';
import { ManualLphFocusCalibrationOperation } from './manual-lph-focus-types';

@Injectable()
export class ManualLphFocusCalibrationOperationService extends StartStopOperationServiceBase<ManualLphFocusCalibrationOperation>{

  constructor() {
    super("ManualLphFocusCalibrationFlowOperation");
  }

  public commit(operation: ManualLphFocusCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/commit`, operation);
  }

  public cancel(operation: ManualLphFocusCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/cancel`, operation);
  }

  public update(operation: ManualLphFocusCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/update`, operation.Data);
  }
}
