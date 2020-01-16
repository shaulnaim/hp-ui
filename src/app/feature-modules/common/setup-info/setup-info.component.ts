import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SetupInfoEntityModel, SetupInfoEntity } from 'common-api';

@Component({
  selector: 'app-setup-info',
  templateUrl: './setup-info.component.html',
  styleUrls: ['./setup-info.component.scss']
})
export class SetupInfoComponent implements OnInit {

  private _subscription: Subscription;
  setupInfoEntity: SetupInfoEntity;

  constructor(private _entityModel: SetupInfoEntityModel) {}

  ngOnInit() {
    this._subscription = this._entityModel.observable.subscribe(ent => {
      this.setupInfoEntity = ent
    });
  }
  
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}