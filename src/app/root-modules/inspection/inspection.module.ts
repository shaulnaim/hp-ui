import { NgModule } from '@angular/core';
import { InspectionScreenComponent } from './inspection-screen/inspection-screen.component';
import { INSPECTION_IMPORTED_MODULES } from './inspection-imported-modules';

@NgModule({
  imports: [INSPECTION_IMPORTED_MODULES],
  declarations: [InspectionScreenComponent]
})
export class InspectionModule { }
