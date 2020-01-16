import { CommandServiceBase } from './command-service-base';
import { CommandBase } from './common-interfaces';
import { PatternModelBase } from './pattern-model-bases';

export abstract class CommandModelBase<TCommand extends CommandBase> extends PatternModelBase<TCommand>{

    constructor(protected service: CommandServiceBase<TCommand>) {
        super(service)
    }

    public activate(command: TCommand) {
        return this.service.activate(command);
    }
}
