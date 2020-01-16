import { NgModule } from '@angular/core';
import { PlannerScreenComponent } from './planner-screen/planner-screen.component';
import { PLANNER_IMPORTED_MODULES } from './planner-imported-modules';
import { VerticalRulerLeftComponent } from './vertical-ruler-left/vertical-ruler-left.component';
import { VerticalRulerRightComponent } from './vertical-ruler-right/vertical-ruler-right.component';
import { PlannerSlotComponent } from './planner-slot/planner-slot.component';
import { PlannerInstructionComponent } from './planner-instruction/planner-instruction.component';
import { PlannerSlotsListComponent } from './planner-slots-list/planner-slots-list.component';
import { ShiftSuppliesComponent } from './shift-supplies/shift-supplies.component';

@NgModule({
  imports: [PLANNER_IMPORTED_MODULES],
  declarations: [PlannerScreenComponent, PlannerSlotComponent, PlannerInstructionComponent, PlannerSlotsListComponent, VerticalRulerLeftComponent, VerticalRulerRightComponent, ShiftSuppliesComponent]
})
export class PlannerModule { }
