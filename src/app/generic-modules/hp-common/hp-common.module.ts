import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Utils } from './utils';
import { Config } from './config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[Utils, Config]
})
export class HpCommonModule { }
