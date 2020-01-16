import { Injectable } from '@angular/core';
import { StartStopOperationModelBase } from 'hp-base-classes';
import { StiRCalibrationOperation } from './stir-types';
import { StiRCalibrationOperationService } from './stir-calibration-operation.service';

@Injectable()
export class StiRCalibrationOperationModel extends StartStopOperationModelBase<StiRCalibrationOperation> {

    constructor(service: StiRCalibrationOperationService) {
        super(service);
    }

    private GetStiRCalibrationOperationDataService(): StiRCalibrationOperationService {
        return this.service as StiRCalibrationOperationService;
    }

    public commit(operation: StiRCalibrationOperation): Promise<void> {
        return this.GetStiRCalibrationOperationDataService().commit(operation);
    }

    public cancel(operation: StiRCalibrationOperation): Promise<void> {
        return this.GetStiRCalibrationOperationDataService().cancel(operation);
    }

    public update(operation: StiRCalibrationOperation): Promise<void> {
        return this.GetStiRCalibrationOperationDataService().update(operation);
    }
}
