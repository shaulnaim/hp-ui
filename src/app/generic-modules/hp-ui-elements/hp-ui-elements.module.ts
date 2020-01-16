import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HpServicesModule } from 'hp-services';

import { ExceptionControlComponent } from './exception-control/exception-control.component';
import { CommandControl } from './hp-command-control/hp-command-control.component';
import { OperationControl } from './hp-start-stop-operation-control/hp-start-stop-operation-control.component';
import { HpProgressControlComponent } from './hp-progress-control/hp-progress-control.component';
import { HpLabelIconControlComponent } from './hp-label-icon-control/hp-label-icon-control.component';
import { HpToggleControlComponent } from './hp-toggle-control/hp-toggle-control.component';
import { HpButtonControlComponent } from './hp-button-control/hp-button-control.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';


@NgModule({
  imports: [
    CommonModule,
    HpServicesModule
  ],
  exports: [
    ExceptionControlComponent,
    CommandControl,
    OperationControl,
    HpProgressControlComponent,
    HpLabelIconControlComponent,
    HpToggleControlComponent,
    HpButtonControlComponent,
    AutoFocusDirective
  ],
  declarations: [
    ExceptionControlComponent,
    CommandControl,
    OperationControl,
    HpProgressControlComponent,
    HpLabelIconControlComponent,
    HpToggleControlComponent,
    HpButtonControlComponent,
    AutoFocusDirective
  ]
})
export class HpUiElementsModule { }
