import { Injectable } from '@angular/core';
import { EntityKeyableServiceBase } from 'hp-base-classes';
import { ErrorEventsEntity, ErrorEventsEntityKey } from "./error-events-types";

@Injectable({
  providedIn: 'root'
})
export class ErrorEventsEntityService extends EntityKeyableServiceBase<ErrorEventsEntity, ErrorEventsEntityKey>{

  constructor() {  super('ErrorEvent');}
}
