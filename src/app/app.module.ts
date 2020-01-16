import { NgModule, ErrorHandler, APP_INITIALIZER, Injector } from '@angular/core';

import { ErrorHandlerService, StartupService } from 'hp-services';
import { AppComponent } from './app.component';
import { APP_IMPORTED_MODULES } from './app-imported-modules';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [APP_IMPORTED_MODULES],
  providers: [ { provide: ErrorHandler, useClass: ErrorHandlerService },
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }


