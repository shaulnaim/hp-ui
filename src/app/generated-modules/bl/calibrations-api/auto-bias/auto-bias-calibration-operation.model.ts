import { Injectable } from '@angular/core';
import { StartStopOperationModelBase } from 'hp-base-classes';
import { Observable } from 'rxjs';
import { AutoBiasCalibrationOperationService } from './auto-bias-calibration-operation.service';
import { AutoBiasCalibrationOperation } from './auto-bias-types';

@Injectable()
export class AutoBiasCalibrationOperationModel extends StartStopOperationModelBase<AutoBiasCalibrationOperation>{

    constructor(service: AutoBiasCalibrationOperationService){
        super(service);
    }

    private GetAutoBiasCalibrationOperationDataService() : AutoBiasCalibrationOperationService{
        return this.service as AutoBiasCalibrationOperationService;
    }

    public commit(operation: AutoBiasCalibrationOperation): Promise<void> {
        return this.GetAutoBiasCalibrationOperationDataService().commit(operation);
    }

    public cancel(operation: AutoBiasCalibrationOperation): Promise<void> {
        return this.GetAutoBiasCalibrationOperationDataService().cancel(operation);
    }

    public update(operation: AutoBiasCalibrationOperation): Promise<void> {
        return this.GetAutoBiasCalibrationOperationDataService().update(operation);
    }
}
