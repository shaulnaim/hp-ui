import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';

export abstract class EntityServiceBase<TEntity> extends ServiceBase {

  constructor(protected resourceName: string) {
    super(resourceName);
    this.contentObservable = this.getObservableSingle() as Observable<TEntity>;
  };

  protected updateInternal(entity: TEntity) {
    return this.restService.put(this.resourceName + '/update', entity);
  }
}
