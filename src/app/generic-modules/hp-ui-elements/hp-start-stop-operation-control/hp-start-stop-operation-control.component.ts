import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription } from 'rxjs';

import { StartStopOperationAdapter, OperationStates, StartStopOperationBase,StartStopOperationModelBase} from 'hp-base-classes';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'operation-control',
  templateUrl: './hp-start-stop-operation-control.component.html',
  styleUrls: ['./hp-start-stop-operation-control.component.scss']
})

export class OperationControl<T extends StartStopOperationBase> implements OnInit, OnDestroy {


  operationStatesSwitchCaseValues = OperationStates; // this is required for ngSwitchCase
  @Input() operationAdapter: StartStopOperationAdapter;
  @Input() operationButtonClassName: string;
  @Input() stopOperationButtonClassName: string;
  @Input() private operationButtonGroup: string;
  constructor() {  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.operationAdapter !== null) {
      this.operationAdapter.dispose ();
      this.operationAdapter = null;
    }
  }

  start() {
    if (this.operationAdapter !== null) {
        this.operationAdapter.start();
      }
  }

  stop() {
    if (this.operationAdapter !== null) {
    this.operationAdapter.stop();
    }
  }

}
