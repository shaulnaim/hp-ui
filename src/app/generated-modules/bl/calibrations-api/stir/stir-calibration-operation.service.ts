
import { Injectable } from '@angular/core';
import { StartStopOperationServiceBase } from 'hp-base-classes';
import { StiRCalibrationOperation } from './stir-types';

@Injectable()
export class StiRCalibrationOperationService extends StartStopOperationServiceBase<StiRCalibrationOperation> {

  constructor() {
    super('StiRCalibrationFlowOperation');
  }

  public commit(operation: StiRCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/commit`, operation);
  }

  public cancel(operation: StiRCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/cancel`, operation);
  }

  public update(operation: StiRCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/update`, operation.Data);
  }
}
