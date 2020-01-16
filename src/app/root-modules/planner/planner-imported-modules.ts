import { CommonModule } from '@angular/common';
import { PrintingModule } from "printing";
import { PressControlModule } from 'press-control';
import { FeatureCommonModule } from "common";
import { HpUiElementsModule } from 'hp-ui-elements';
import { PlannerApiModule } from 'planner-api';

export const PLANNER_IMPORTED_MODULES = [
    CommonModule, 
    PrintingModule,
    PressControlModule,
    FeatureCommonModule,
    HpUiElementsModule,
    PlannerApiModule
];