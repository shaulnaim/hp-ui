import { Injectable } from '@angular/core';

import { IUpdatable, EntityKeyableServiceBase } from 'hp-base-classes';

import { JobEntity, JobEntityKey } from './job-types';

@Injectable({
    providedIn: 'root'
})
export class JobEntityService extends EntityKeyableServiceBase<JobEntity, JobEntityKey> implements IUpdatable<JobEntity, JobEntityKey> {

    public update(entity: JobEntity) {
        return super.updateInternal(entity);
    }

    constructor() {
        super('JobEntity');
    }
}
