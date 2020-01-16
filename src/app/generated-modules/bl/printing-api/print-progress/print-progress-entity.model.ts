import { Injectable } from '@angular/core';

import { EntityModelBase } from 'hp-base-classes';

import { PrintProgressEntityService } from "./print-progress-entity.service";
import { PrintProgressEntity } from "./print-progress-types";

@Injectable()
export class PrintProgressEntityModel extends EntityModelBase<PrintProgressEntity>{

    constructor(service: PrintProgressEntityService) {
        super(service);
    }
}