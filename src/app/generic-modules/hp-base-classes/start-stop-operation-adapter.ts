import { Observable, Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { StartStopOperationModelBase } from 'hp-base-classes';

import { StartStopOperationBase} from './common-interfaces';

type callback = (operation: StartStopOperationBase) => Observable<void>;

export class StartStopOperationAdapter {
    public operationChanged = new EventEmitter<any>();
    public operation;
    private _operationSubscription: Subscription;

    constructor(protected _operationModel: StartStopOperationModelBase<StartStopOperationBase>) {
        this._operationSubscription = this._operationModel.observable.subscribe(opt => this.updateOperation(opt));
    }

    updateOperation(operation: StartStopOperationBase) {
        this.operation = operation;
    }

    public start() {
        this._operationModel.start(this.operation);
    }

    public stop() {
        this._operationModel.stop(this.operation);
    }

    public dispose () {
        this._operationSubscription.unsubscribe();
    }
}


