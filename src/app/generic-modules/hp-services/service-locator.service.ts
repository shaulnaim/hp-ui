import { Injector } from '@angular/core';

import { NotificationService } from './notification.service';
import { RestService } from './rest.service';
import { LoggerService } from './logger.service';

export class ServiceLocator {
    static injector: Injector;

    static getLoggerService(): LoggerService {
        return ServiceLocator.injector.get(LoggerService);
    }
    static getNotificationService(): NotificationService {
        return ServiceLocator.injector.get(NotificationService);
    }
    static getRestService(): RestService {
        return ServiceLocator.injector.get(RestService);
    }  
}
