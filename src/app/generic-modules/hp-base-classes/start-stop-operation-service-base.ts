import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';

export abstract class StartStopOperationServiceBase<TStartStopOperation> extends ServiceBase {
    public contentObservable: Observable<TStartStopOperation>;

    
    public start(operation: TStartStopOperation): Promise<void> {
        return this.restService.put(this.resourceName + `/start`, operation);
    }

    public stop(operation: TStartStopOperation): Promise<void> {
        return this.restService.put(this.resourceName + `/stop`, operation);
    }

    constructor(protected resourceName: string) {
        super(resourceName);
        this.contentObservable = this.getObservableSingle() as Observable<TStartStopOperation>;
    };
}
