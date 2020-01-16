import { PressStateEntityModel } from './press-state/press-state-entity.model';
import { GetReadyOperationModel } from './get-ready/get-ready-operation.model';
import { GoToStandbyCommandModel } from './go-to-standby/go-to-standby-command.model';
import { GetReadyOperationService } from './get-ready/get-ready-operation.service';
import { GoToStandbyCommandService } from './go-to-standby/go-to-standby-command.service';
import { PressStateEntityService } from './press-state/press-state-entity.service';
import { JobEntityModel } from './job/job-entity.model';
import { JobEntityService } from './job/job-entity.service'
import { NgModule } from '@angular/core';



@NgModule({
    providers:[PressStateEntityModel,
            GetReadyOperationModel,
            GoToStandbyCommandModel,
            PressStateEntityService,
            GetReadyOperationService,
            GoToStandbyCommandService,
            JobEntityModel,
            JobEntityService]
  })
  export class PressControlApiModule{}
