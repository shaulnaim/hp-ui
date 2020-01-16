import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlannerSlotEntity } from 'planner-api';

@Component({
  selector: 'app-planner-slot',
  templateUrl: './planner-slot.component.html',
  styleUrls: ['./planner-slot.component.scss']
})
export class PlannerSlotComponent implements OnInit {

  @Input() plannerSlotEntity: PlannerSlotEntity;

  isToolBarDisplayed: boolean;
  isJobPropertiesDisplayed: boolean;

  constructor() { }

  ngOnInit() {
  }

  showJobProperties(show: boolean) {
    this.isJobPropertiesDisplayed = show;
  }

  showToolBar(show: boolean) {
    this.isToolBarDisplayed = show;
  }

}
