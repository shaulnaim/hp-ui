
import { NgModule } from '@angular/core';
import { AutoBiasCalibrationOperationModel} from './auto-bias/auto-bias-calibration-operation.model';
import {AutoBiasCalibrationOperationService } from './auto-bias/auto-bias-calibration-operation.service';
import { StiRCalibrationOperationModel } from './stir/stir-calibration-operation.model';
import { StiRCalibrationOperationService } from './stir/stir-calibration-operation.service';
import { CleanerCalibrationOperationModel } from './cleaner/cleaner-calibration-operation.model';
import { CleanerCalibrationOperationService } from './cleaner/cleaner-calibration-operation.service';
import { ManualLphFocusCalibrationOperationModel } from './manual-lph-focus/manual-lph-focus-calibration-operation.model';
import { ManualLphFocusCalibrationOperationService } from './manual-lph-focus/manual-lph-focus-calibration-operation.service';

@NgModule({
    providers: [
        AutoBiasCalibrationOperationModel,
        AutoBiasCalibrationOperationService,
        StiRCalibrationOperationModel,
        StiRCalibrationOperationService,
        CleanerCalibrationOperationModel,
        CleanerCalibrationOperationService,
        ManualLphFocusCalibrationOperationModel,
        ManualLphFocusCalibrationOperationService
      ]
})
export class CalibrationApiModule{}

