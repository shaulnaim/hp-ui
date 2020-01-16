import { Injectable } from '@angular/core';

import { EntityServiceBase } from 'hp-base-classes';

import { SetupInfoEntity } from "./setup-info-types";

@Injectable({
  providedIn: 'root'
})
export class SetupInfoEntityService extends EntityServiceBase<SetupInfoEntity>{

  constructor() {  super('SetupInfo');}
}
