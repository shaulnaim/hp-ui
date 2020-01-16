import { AutoBiasCalibrationOperation } from './auto-bias-types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { StartStopOperationServiceBase } from 'hp-base-classes';

@Injectable()
export class AutoBiasCalibrationOperationService extends StartStopOperationServiceBase<AutoBiasCalibrationOperation>{

  constructor() {
    super("AutoBiasCalibrationFlowOperation");
  }

  public commit(operation: AutoBiasCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/commit`, operation);
  }

  public cancel(operation: AutoBiasCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/cancel`, operation);
  }

  public update(operation: AutoBiasCalibrationOperation): Promise<void> {
    return this.restService.put(this.resourceName + `/update`, operation.Data);
  }
}
