import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PressStateEntity, PressStateEntityModel, GoToStandbyCommandModel, GetReadyOperationModel, PressStates} from 'press-control-api';
import {SetupInfoEntity, SetupInfoEntityModel } from 'common-api'
import { PrintOperationModel } from 'printing-api';
import { StartStopOperationAdapter } from 'hp-base-classes';

@Component({
  selector: 'app-dev-main-screen',
  templateUrl: './dev-main-screen.component.html',
  styleUrls: ['./dev-main-screen.component.scss']
})
export class DevMainScreenComponent implements OnInit {

  showSubstrateList = false;
  showErrorEvents = false;
  showAutoBiasWizard = false;
  showManualLphFocusWizard = false;
  showStiRAndCleanerWizard = false;

  private _pressStateSubscription: Subscription;
  private _pressStateEntity: PressStateEntity;
  private _setupInfoEntity: SetupInfoEntity;
  isGoToStandByHidden:  boolean;
  isGetReadyHidden:  boolean;
  public getReadyOperationAdapter: StartStopOperationAdapter;
  public printOperationAdapter: StartStopOperationAdapter;

  constructor(private _pressStateEntityModel: PressStateEntityModel,
    public goToStandbyCommandModel: GoToStandbyCommandModel,
    private printOperationModel: PrintOperationModel,
    private getReadyOperationModel: GetReadyOperationModel,
  ) {
    this.getReadyOperationAdapter = new StartStopOperationAdapter(getReadyOperationModel);
    this.printOperationAdapter = new StartStopOperationAdapter(printOperationModel);

  }

  toggleSubstrateList() {
    this.showSubstrateList = !this.showSubstrateList;
  }

  toggleErrorEvents() {
    this.showErrorEvents = !this.showErrorEvents;
  }

  openAutoBiasWizard() {
    this.showAutoBiasWizard = true;
  }

  openManualLphFocusWizard(){
    this.showManualLphFocusWizard = true;
  }

  openStiRAndCleanerWizard() {
    this.showStiRAndCleanerWizard = true;
  }

  closeAutoBiasWizard() {
    this.showAutoBiasWizard = false;
  }

  closeManualLphFocusWizard() {
    this.showManualLphFocusWizard = false;
  }

  closeStiRAndCleanerWizard() {
    this.showStiRAndCleanerWizard = false;
  }

  ngOnInit() {
    this._pressStateSubscription = this._pressStateEntityModel.observable.subscribe(ent =>
      {
        this._pressStateEntity = ent;
        this.isGoToStandByHidden= (this._pressStateEntity == null || this._pressStateEntity.PressState != PressStates.Ready);
        this.isGetReadyHidden= (this._pressStateEntity == null || this._pressStateEntity.PressState ==  PressStates.Ready);
      });
   }

  ngOnDestroy(){
      this._pressStateSubscription.unsubscribe();
  }
}
