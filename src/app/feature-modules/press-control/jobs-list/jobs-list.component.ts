import { Component, OnInit } from '@angular/core';
import { PlannerSlotEntity, PlannerSlotEntityModel } from 'planner-api';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  //TODO should be changed to different type of entity, after implementation of App and BL layers 
  jobsInHeldQ: PlannerSlotEntity[]=[];
  jobsInRetainedQ: PlannerSlotEntity[]=[];
  isHeldTabSelected: boolean = true;

  private _plannerSlotsSubscription;

  constructor(private _plannerSlotEntityModel: PlannerSlotEntityModel) { }

  ngOnInit() {
    //TODO remove subscription to plannerSlotEntityModel, it's only for now so we'll have what to show, until we'll connect jobs to BL
    this._plannerSlotsSubscription = this._plannerSlotEntityModel.getObservable().subscribe(entities => {
      this.jobsInHeldQ = entities;
      entities.forEach(ent=>this.jobsInRetainedQ.push(ent));
      entities.forEach(ent=>this.jobsInRetainedQ.push(ent));
    });
  }

  ngOnDestroy() {
    this._plannerSlotsSubscription.unsubscribe();
  }

  toggleTabSelection(isLeftSelected) {
    this.isHeldTabSelected = isLeftSelected;
  }
}
