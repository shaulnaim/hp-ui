import { Injectable } from "@angular/core";

import { EntityKeyableModelBase } from "hp-base-classes";
import { PlannerSlotEntity, PlannerSlotEntityKey } from "./planner-slot-types";
import { PlannerSlotEntityService } from "./planner-slot-entity.service";


@Injectable()
export class PlannerSlotEntityModel extends EntityKeyableModelBase<PlannerSlotEntity, PlannerSlotEntityKey>{

    constructor(service: PlannerSlotEntityService) {
        super(service);
    }
}