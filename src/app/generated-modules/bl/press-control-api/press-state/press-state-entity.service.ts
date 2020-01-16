import { Injectable } from '@angular/core';

import { EntityServiceBase } from 'hp-base-classes';

import { PressStateEntity } from "./press-state-types";

@Injectable()
export class PressStateEntityService extends EntityServiceBase<PressStateEntity>{

    constructor() {
        super('PressStateEntity');
    }

}