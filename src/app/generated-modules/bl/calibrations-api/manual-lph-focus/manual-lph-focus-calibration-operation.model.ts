import { Injectable } from '@angular/core';
import { StartStopOperationModelBase } from 'hp-base-classes';
import { ManualLphFocusCalibrationOperation } from './manual-lph-focus-types';
import { ManualLphFocusCalibrationOperationService } from './manual-lph-focus-calibration-operation.service';

@Injectable()
export class ManualLphFocusCalibrationOperationModel extends StartStopOperationModelBase<ManualLphFocusCalibrationOperation>{

    constructor(service: ManualLphFocusCalibrationOperationService){
        super(service);
    }

    private GetManualLphFocusCalibrationOperationDataService() : ManualLphFocusCalibrationOperationService{
        return this.service as ManualLphFocusCalibrationOperationService;
    }

    public commit(operation: ManualLphFocusCalibrationOperation): Promise<void> {
        return this.GetManualLphFocusCalibrationOperationDataService().commit(operation);
    }

    public cancel(operation: ManualLphFocusCalibrationOperation): Promise<void> {
        return this.GetManualLphFocusCalibrationOperationDataService().cancel(operation);
    }

    public update(operation: ManualLphFocusCalibrationOperation): Promise<void> {
        return this.GetManualLphFocusCalibrationOperationDataService().update(operation);
    }
}
