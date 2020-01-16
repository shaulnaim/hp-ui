import { Injectable } from '@angular/core';

import { EntityModelBase } from 'hp-base-classes';

import { PressStateEntityService } from './press-state-entity.service';
import { PressStateEntity } from './press-state-types';


@Injectable()
export class PressStateEntityModel extends EntityModelBase<PressStateEntity>{

    constructor(service: PressStateEntityService) {
        super(service);
    }
}
