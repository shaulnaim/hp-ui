import { ServiceBase } from './service-base';
import { IKeyableData } from './common-interfaces';

export abstract class EntityKeyableServiceBase<TEntity extends IKeyableData<TKey>, TKey> extends ServiceBase {

  constructor(protected resourceName: string) {
    super(resourceName);
  };

  protected addInternal(entity: TEntity): Promise<TEntity> {
    return this.restService.put(this.resourceName + '/add', entity);
  }

  protected updateInternal(entity: TEntity): Promise<TEntity> {
    return this.restService.put(this.resourceName + '/update', entity);
  }

  protected deleteInternal(key: any) {
    return this.restService.put(this.resourceName + '/delete', key);
  }
}
