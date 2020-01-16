import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PressStateEntityModel, PressStateEntity, PressStates } from 'press-control-api';

@Component({
  selector: 'app-press-state',
  templateUrl: './press-state.component.html',
  styleUrls: ['./press-state.component.scss']
})
export class PressStateComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  pressStateEntity: PressStateEntity;
  pressStatesSwitchCaseValues = PressStates; // this is required for ngSwitchCase

  constructor(private _entityModel: PressStateEntityModel) { }

  ngOnInit() {
    this._subscription = this._entityModel.observable.subscribe(ent => {
      this.pressStateEntity = ent
    });
  }


  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
