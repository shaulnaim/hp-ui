import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HpUiElementsModule } from 'hp-ui-elements';

import { PressStateComponent } from './press-state/press-state.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './job/job.component';
import { JobPropertiesComponent } from './job-properties/job-properties.component';

@NgModule({
  imports: [
    CommonModule,
    HpUiElementsModule
  ],
  exports:[PressStateComponent, JobsListComponent, JobPropertiesComponent],
  declarations: [PressStateComponent, JobsListComponent, JobComponent, JobPropertiesComponent]
})
export class PressControlModule { }
