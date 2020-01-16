import { Injectable } from '@angular/core';
import { EntityKeyableServiceBase } from 'hp-base-classes';
import { PlannerSlotEntity, PlannerSlotEntityKey } from './planner-slot-types';

@Injectable({
  providedIn: 'root'
})
export class PlannerSlotEntityService extends EntityKeyableServiceBase<PlannerSlotEntity, PlannerSlotEntityKey> {

  constructor() {
    super('PlannerSlotEntity');
  }
}