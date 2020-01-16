import { PatternModelBase } from './pattern-model-bases';
import { EntityServiceBase } from './entity-service-base';

export abstract class EntityModelBase<TEntity> extends PatternModelBase<TEntity>{
   
    constructor(protected service: EntityServiceBase<TEntity>) {
        super(service);
    }

    protected updateInternal(entity: TEntity): Promise<TEntity> {
        let tempService: any = this.service;
        let response : Promise<TEntity> = tempService.update(entity);
        return response;
    }
}
