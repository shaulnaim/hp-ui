import { Injectable } from '@angular/core';
import { StartStopOperationModelBase } from 'hp-base-classes';
import { CleanerCalibrationOperationService } from './cleaner-calibration-operation.service';
import { CleanerCalibrationOperation } from './cleaner-types';

@Injectable()
export class CleanerCalibrationOperationModel extends StartStopOperationModelBase<CleanerCalibrationOperation> {

    constructor(service: CleanerCalibrationOperationService) {
        super(service);
    }

    private GetCleanerCalibrationOperationDataService(): CleanerCalibrationOperationService {
        return this.service as CleanerCalibrationOperationService;
    }

    public commit(operation: CleanerCalibrationOperation): Promise<void> {
        return this.GetCleanerCalibrationOperationDataService().commit(operation);
    }

    public cancel(operation: CleanerCalibrationOperation): Promise<void> {
        return this.GetCleanerCalibrationOperationDataService().cancel(operation);
    }

    public update(operation: CleanerCalibrationOperation): Promise<void> {
        return this.GetCleanerCalibrationOperationDataService().update(operation);
    }
}
