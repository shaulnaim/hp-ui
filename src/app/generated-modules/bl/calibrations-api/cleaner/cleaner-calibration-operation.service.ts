
import { Injectable } from '@angular/core';
import { StartStopOperationServiceBase } from 'hp-base-classes';
import { CleanerCalibrationOperation } from './cleaner-types';

@Injectable()
export class CleanerCalibrationOperationService extends StartStopOperationServiceBase<CleanerCalibrationOperation> {

  constructor() {
    super('CleanerCalibrationFlowOperation');
  }

  public commit(operation: CleanerCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/commit`, operation);
  }

  public cancel(operation: CleanerCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/cancel`, operation);
  }

  public update(operation: CleanerCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/update`, operation.Data);
  }
}
