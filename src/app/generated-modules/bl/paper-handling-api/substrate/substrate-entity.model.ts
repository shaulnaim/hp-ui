import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { EntityKeyableModelBase } from "hp-base-classes";

import { SubstrateEntity, SubstrateEntityKey } from "./substrate-types";
import { SubstrateEntityService } from "./substrate-entity.service";

@Injectable()
export class SubstrateEntityModel extends EntityKeyableModelBase<SubstrateEntity, SubstrateEntityKey>{

    constructor(service: SubstrateEntityService) {
        super(service);
    }

    public add(entity: SubstrateEntity): Promise<SubstrateEntity> {
        return super.addInternal(entity);
    }

    public update(entity: SubstrateEntity): Promise<SubstrateEntity> {
        return super.updateInternal(entity);
    }

    public delete(key: SubstrateEntityKey) : Promise<SubstrateEntity>{
        return super.deleteInternal(key);
    }

}