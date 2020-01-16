import { NgModule } from '@angular/core';

import { PrintOperationModel } from './print/print-operation.model';
import { PrintOperationService } from './print/print-operation.service';
import { PrintProgressEntityService } from './print-progress/print-progress-entity.service';
import { PrintProgressEntityModel } from './print-progress/print-progress-entity.model';

@NgModule({
  providers: [PrintOperationModel, PrintOperationService, PrintProgressEntityService, PrintProgressEntityModel]
})
export class PrintingApiModule { }
