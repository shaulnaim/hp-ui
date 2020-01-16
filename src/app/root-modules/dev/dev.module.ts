import { NgModule } from '@angular/core';
import { DevMainScreenComponent } from './dev-main-screen/dev-main-screen.component';
import { DEV_IMPORTED_MODULES } from './dev-imported-modules';

@NgModule({
  imports: [DEV_IMPORTED_MODULES],
  declarations: [DevMainScreenComponent]
})
export class DevModule { }
