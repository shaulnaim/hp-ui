import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';

export abstract class CommandServiceBase<TCommand> extends ServiceBase {

  public activate(command: TCommand): Promise<void> {
    return this.restService.put(this.resourceName + `/activate`, command);
  }

  constructor(protected resourceName: string) {
    super(resourceName);
    this.contentObservable = this.getObservableSingle() as Observable<TCommand>;
  };
}
