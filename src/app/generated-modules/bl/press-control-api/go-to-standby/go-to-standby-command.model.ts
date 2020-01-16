import { Injectable } from '@angular/core';

import { CommandModelBase } from 'hp-base-classes';

import { GoToStandbyCommand } from './go-to-standby-types';
import { GoToStandbyCommandService } from './go-to-standby-command.service';


@Injectable()
export class GoToStandbyCommandModel extends CommandModelBase<GoToStandbyCommand>{

    constructor(service: GoToStandbyCommandService){
        super(service)
    }
}
