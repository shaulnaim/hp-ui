import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorEventsEntity, ErrorEventsEntityModel } from 'common-api';

@Component({
  selector: 'app-last-error-event',
  templateUrl: './error-events-message.component.html',
  styleUrls: ['./error-events-message.component.scss']
})

export class ErrorEventsMessageComponent implements OnInit {

  private _subscription: Subscription;
  public _ErrorEvent: ErrorEventsEntity;

  
   
  constructor(private _entityModel: ErrorEventsEntityModel) {
    this._ErrorEvent = null;
      }

  
  ngOnInit() {
    this._subscription = this._entityModel.getObservable().subscribe(ent => {          
     ent.sort((x, y) => x.Time < y.Time ? 1 : -1);
     if(ent.length > 0)
      this._ErrorEvent = ent[0];            
    });

  }
  

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  clearLastEvent()
  {
    this._ErrorEvent = null;
  }
}