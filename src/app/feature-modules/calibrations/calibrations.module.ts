
import { HpUiElementsModule } from 'hp-ui-elements';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StiRCleanerContainerComponent } from './stir-cleaner/stir-cleaner.component';
import { CleanerComponent } from './stir-cleaner/cleaner/cleaner.component';
import { AutoBiasComponent } from './auto-bias/auto-bias.component';
import { CalibrationMEStationResultComponent } from './calibration-me-station-result-control/calibration-me-station-result-control.component';
import { StiRComponent } from './stir-cleaner/stir/stir.component';
import { ManualLphFocusComponent } from './manual-lph-focus/manual-lph-focus.component';


@NgModule({
  imports: [
    CommonModule,
    HpUiElementsModule,
    FormsModule
  ],
  exports:[AutoBiasComponent, StiRComponent, CleanerComponent, StiRCleanerContainerComponent, CalibrationMEStationResultComponent, ManualLphFocusComponent],
  declarations: [AutoBiasComponent, StiRComponent, CleanerComponent, StiRCleanerContainerComponent, CalibrationMEStationResultComponent, ManualLphFocusComponent]
})
export class CalibrationsModule { }
