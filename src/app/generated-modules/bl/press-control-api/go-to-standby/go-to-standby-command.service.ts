import { Injectable } from '@angular/core';

import { CommandServiceBase } from 'hp-base-classes';

import { GoToStandbyCommand } from './go-to-standby-types';

@Injectable()
export class GoToStandbyCommandService extends CommandServiceBase<GoToStandbyCommand>{

  constructor() {
    super("GoToStandbyCommand");
  }

}
