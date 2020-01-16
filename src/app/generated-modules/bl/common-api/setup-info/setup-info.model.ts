import { Injectable } from '@angular/core';

import { EntityModelBase } from 'hp-base-classes';

import { SetupInfoEntityService } from './setup-info.service';
import { SetupInfoEntity } from "./setup-info-types";


@Injectable({
    providedIn: 'root'
  })
export class SetupInfoEntityModel extends EntityModelBase<SetupInfoEntity>{

    constructor(service: SetupInfoEntityService) {
        super(service);
    }
}