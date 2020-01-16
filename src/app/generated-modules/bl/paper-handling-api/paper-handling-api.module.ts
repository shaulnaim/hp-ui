import { NgModule } from '@angular/core';
import { SubstrateEntityModel } from './substrate/substrate-entity.model';
import { SubstrateEntityService } from './substrate/substrate-entity.service';

@NgModule({
  imports: [
  ],
  providers: [SubstrateEntityModel, SubstrateEntityService]
})
export class PaperHandlingApiModule { }
