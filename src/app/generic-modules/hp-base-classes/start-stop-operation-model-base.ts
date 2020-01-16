import { StartStopOperationBase } from './common-interfaces';
import { StartStopOperationServiceBase } from './start-stop-operation-service-base';
import { PatternModelBase } from './pattern-model-bases';

export abstract class StartStopOperationModelBase<TStartStopOperation extends StartStopOperationBase> extends PatternModelBase<TStartStopOperation>{
   
    constructor(protected service: StartStopOperationServiceBase<TStartStopOperation>) {
        super(service)
    }

    public start(operation: TStartStopOperation): Promise<void> {
        return this.service.start(operation);
    }

    public stop(operation: TStartStopOperation): Promise<void> {
        return this.service.stop(operation);
    }
}
