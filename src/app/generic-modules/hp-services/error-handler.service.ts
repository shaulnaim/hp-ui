import { Injectable, ErrorHandler, EventEmitter, Output } from '@angular/core';

import { LoggerService } from './logger.service';

export enum ExceptionComponentSource { Unknown, UI, BL, Infra }

export class ErrorWithComponentSource extends Error {
  public componentSource: ExceptionComponentSource;
}

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  @Output() onExceptionThrown = new EventEmitter<ErrorWithComponentSource>();

  constructor(private _loggerService: LoggerService) {
    super();
  }

  handleError(error) {
    this.onExceptionThrown.emit(error);
    this._loggerService.error(error);
  }
}


