import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevMainScreenComponent } from 'dev-root'
import { PlannerScreenComponent } from 'planner-root';
import { InspectionScreenComponent } from 'inspection-root';
import { MonitorScreenComponent } from 'monitor-root';

const appRoutes: Routes = [
  { path: 'dev', component: DevMainScreenComponent },
  { path: 'planner', component: PlannerScreenComponent },
  { path: 'inspection', component: InspectionScreenComponent },
  { path: 'monitor', component: MonitorScreenComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
