import { Injectable } from '@angular/core';
import { IAddable, IUpdatable, IDeletable, EntityKeyableServiceBase } from 'hp-base-classes';
import { SubstrateEntity, SubstrateEntityKey } from './substrate-types';

@Injectable({
  providedIn: 'root'
})
export class SubstrateEntityService extends EntityKeyableServiceBase<SubstrateEntity, SubstrateEntityKey> implements IAddable<SubstrateEntity, SubstrateEntityKey>, IUpdatable<SubstrateEntity, SubstrateEntityKey>, IDeletable<SubstrateEntityKey> {

  public add(entity: SubstrateEntity): Promise<SubstrateEntity> {
    return super.addInternal(entity);
  }
  public update(entity: SubstrateEntity) {
    return super.updateInternal(entity);
  }
  public delete(key: SubstrateEntityKey) {
    return super.deleteInternal(key);
  }
  constructor() {
    super('SubstrateEntity');
  }
}
