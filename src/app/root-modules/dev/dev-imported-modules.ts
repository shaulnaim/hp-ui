import { CommonModule } from '@angular/common';
import { PressControlModule } from "press-control";
import { CalibrationsModule } from "calibrations";
import { FeatureCommonModule } from "common";
import { PaperHandlingModule } from "paper-handling";
import { HpUiElementsModule } from "hp-ui-elements";
import { PressControlApiModule } from "press-control-api";
import { PrintingApiModule } from "printing-api";
import { CalibrationApiModule } from "calibrations-api";
import { PaperHandlingApiModule } from "paper-handling-api";


export const DEV_IMPORTED_MODULES = [
    CommonModule,
    CalibrationsModule,
    FeatureCommonModule,
    PaperHandlingModule,
    PressControlModule,
    PressControlApiModule,
    PrintingApiModule,
    CalibrationApiModule,
    PaperHandlingApiModule,
    HpUiElementsModule,
];