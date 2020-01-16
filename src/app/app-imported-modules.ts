import { BrowserModule } from "@angular/platform-browser";

import { InspectionModule } from "inspection-root";
import { DevModule } from "dev-root";
import { MonitorModule } from "monitor-root";
import { PlannerModule } from "planner-root";
import { AppRoutingModule } from "./app-routing.module";
import { HpCommonModule } from "hp-common";

export const APP_IMPORTED_MODULES = [
    BrowserModule,
    AppRoutingModule,
    InspectionModule,
    DevModule,
    MonitorModule,
    PlannerModule,
    HpCommonModule
];
