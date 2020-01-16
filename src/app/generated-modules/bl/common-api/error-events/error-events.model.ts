import { Injectable } from '@angular/core';

import { EntityKeyableModelBase } from 'hp-base-classes';

import { ErrorEventsEntityService } from './error-events.service';
import { ErrorEventsEntity, ErrorEventsEntityKey } from "./error-events-types";


@Injectable({
    providedIn: 'root'
  })
export class ErrorEventsEntityModel extends EntityKeyableModelBase<ErrorEventsEntity, ErrorEventsEntityKey>{

    constructor(service: ErrorEventsEntityService) {
        super(service);
    }
}