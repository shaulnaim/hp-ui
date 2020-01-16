import { SetupInfoEntityService } from './setup-info/setup-info.service';
import { SetupInfoEntityModel } from './setup-info/setup-info.model';
import { ErrorEventsEntityService } from './error-events/error-events.service';
import { ErrorEventsEntityModel } from './error-events/error-events.model'


import { NgModule } from '@angular/core';

@NgModule({
    providers:[SetupInfoEntityService,SetupInfoEntityModel, ErrorEventsEntityService, ErrorEventsEntityModel]
  })
export class CommonApiModule{}