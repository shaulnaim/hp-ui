import { Injectable } from '@angular/core';

import { StartStopOperationModelBase } from 'hp-base-classes';

import { GetReadyOperation } from './get-ready-types';
import { GetReadyOperationService } from './get-ready-operation.service';


@Injectable()
export class GetReadyOperationModel extends StartStopOperationModelBase<GetReadyOperation>{

    constructor(service: GetReadyOperationService){
        super(service)
    }
}
