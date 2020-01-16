import { Component, OnInit, Input } from '@angular/core';
import { PlannerSlotEntity, PlannerSlotEntityModel } from 'planner-api';

@Component({
  selector: 'app-planner-slots-list',
  templateUrl: './planner-slots-list.component.html',
  styleUrls: ['./planner-slots-list.component.scss']
})
export class PlannerSlotsListComponent implements OnInit {

  plannerSlots: PlannerSlotEntity[];
  private _plannerSlotsSubscription;

  constructor(private _plannerSlotEntityModel: PlannerSlotEntityModel) { }

  ngOnInit() {
    this._plannerSlotEntityModel.getObservable().subscribe(entities => {
      this.plannerSlots = entities;
    });
  }

  ngOnDestroy() {
    this._plannerSlotsSubscription.unsubscribe();
  }
}
