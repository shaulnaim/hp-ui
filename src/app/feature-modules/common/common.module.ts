import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main"
import { CommonModule } from '@angular/common';
import { SetupInfoComponent } from './setup-info/setup-info.component';
import { ErrorEventsListComponent } from './error-events/error-events-list/error-events-list.component';
import { ErrorEventsMessageComponent } from './error-events/error-events-message/error-events-message.component';
import { IndicationsComponent } from './indications/indications.component';

@NgModule({
  imports: [
    CommonModule, 
    AgGridModule.withComponents([])
  ],
  exports:[SetupInfoComponent, ErrorEventsListComponent, ErrorEventsMessageComponent, IndicationsComponent],
  declarations: [SetupInfoComponent, ErrorEventsListComponent, ErrorEventsMessageComponent, IndicationsComponent]
})
export class FeatureCommonModule { }