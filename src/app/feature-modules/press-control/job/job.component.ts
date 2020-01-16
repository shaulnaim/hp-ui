import { Component, OnInit, Input } from '@angular/core';
import { PlannerSlotEntity } from 'planner-api';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  //TODO should be changed to different type of entity, after implementation of App and BL layers 
  @Input() job: PlannerSlotEntity;

  constructor() { }

  ngOnInit() {
  }

}
