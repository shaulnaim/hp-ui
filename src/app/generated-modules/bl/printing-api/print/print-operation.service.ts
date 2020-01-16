import { Injectable } from '@angular/core';

import { StartStopOperationServiceBase } from 'hp-base-classes';

import { PrintOperation } from './print-types';

@Injectable()
export class PrintOperationService extends StartStopOperationServiceBase<PrintOperation>{

  constructor() {
    super("PrintOperation");
  }

}
