import { Injectable } from '@angular/core';

import { StartStopOperationServiceBase } from 'hp-base-classes';

import { GetReadyOperation } from './get-ready-types';

@Injectable()
export class GetReadyOperationService extends StartStopOperationServiceBase<GetReadyOperation>{

  constructor() {
    super("GetReadyOperation");
  }

}
