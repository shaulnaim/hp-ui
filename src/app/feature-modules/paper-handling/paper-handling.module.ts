import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstrateListComponent } from './substrate-list/substrate-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[SubstrateListComponent],
  declarations: [SubstrateListComponent]
})
export class PaperHandlingModule { }
