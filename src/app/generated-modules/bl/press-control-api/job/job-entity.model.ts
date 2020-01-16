import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { EntityKeyableModelBase } from "hp-base-classes";

import { JobEntity, JobEntityKey } from "./job-types";
import { JobEntityService } from "./job-entity.service";

@Injectable()
export class JobEntityModel extends EntityKeyableModelBase<JobEntity, JobEntityKey>{

    constructor(service: JobEntityService) {
        super(service);
    }

    public update(entity: JobEntity): Promise<JobEntity> {
        return super.updateInternal(entity);
    }

}