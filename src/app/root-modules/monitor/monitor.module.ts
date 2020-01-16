import { NgModule } from '@angular/core';
import { MonitorScreenComponent } from './monitor-screen/monitor-screen.component';
import { MONITOR_IMPORTED_MODULES } from './monitor-imported-modules';

@NgModule({
  imports: [MONITOR_IMPORTED_MODULES],
  declarations: [MonitorScreenComponent]
})
export class MonitorModule { }
