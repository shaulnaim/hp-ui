import { Injectable } from '@angular/core';

import { EntityServiceBase } from 'hp-base-classes';

import { PrintProgressEntity } from "./print-progress-types";

@Injectable()
export class PrintProgressEntityService extends EntityServiceBase<PrintProgressEntity>{

    constructor() {
        super('PrintProgressEntity');
    }

}