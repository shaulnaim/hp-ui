import { NgModule, Injector, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { ServiceLocator } from './service-locator.service';
import { NotificationService } from './notification.service';
import { RestService } from './rest.service';
import { LoggerService } from './logger.service';
import { ErrorHandlerService } from './error-handler.service';
import { HttpInterceptorService } from "./http-rest-interceptor.service";

@NgModule({
  imports: [
    CommonModule,    
    HttpClientModule
  ],
  declarations: [],
  providers: [NotificationService, RestService, LoggerService, ServiceLocator, ErrorHandlerService, HttpInterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
}]

})
export class HpServicesModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
