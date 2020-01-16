import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HpUiElementsModule } from 'hp-ui-elements';

import { PrintProgressComponent } from './print-progress/print-progress.component';


@NgModule({
  imports: [
    CommonModule,
    HpUiElementsModule
  ],
  exports:[PrintProgressComponent],
  declarations: [PrintProgressComponent]
})
export class PrintingModule { }
