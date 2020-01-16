import { Injectable } from '@angular/core';

import { StartStopOperationModelBase } from 'hp-base-classes';

import { PrintOperation } from './print-types';
import { PrintOperationService } from './print-operation.service';


@Injectable()
export class PrintOperationModel extends StartStopOperationModelBase<PrintOperation>{

    constructor(service: PrintOperationService){
        super(service)
    }
}
