import { Component, OnInit, ErrorHandler, ChangeDetectorRef } from '@angular/core';
import { ErrorHandlerService,  ErrorWithComponentSource, ExceptionComponentSource } from 'hp-services'

@Component({
  selector: 'app-exception-control',
  templateUrl: './exception-control.component.html',
  styleUrls: ['./exception-control.component.scss'],
})
export class ExceptionControlComponent implements OnInit {
  error: ErrorWithComponentSource;

  constructor(private _exceptionService: ErrorHandler, private ref: ChangeDetectorRef) {
    this.ref.markForCheck();
  }

  ngOnInit() {
    if (this._exceptionService instanceof ErrorHandlerService) {      
      this._exceptionService.onExceptionThrown.subscribe(error => {
        this.error = error;
        this.ref.detectChanges();
        });
    }
    
  }

  getExceptionComponentSource(): string
  {
      switch(this.error.componentSource)
      {
        case ExceptionComponentSource.BL: return "BL";
        case ExceptionComponentSource.Infra: return "Infra";
        case ExceptionComponentSource.UI: return "UI";
        case ExceptionComponentSource.Unknown: return "Unknown";
      }
  }
}