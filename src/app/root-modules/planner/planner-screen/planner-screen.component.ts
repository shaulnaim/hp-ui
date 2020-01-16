import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planner-screen',
  templateUrl: './planner-screen.component.html',
  styleUrls: ['./planner-screen.component.scss']
})
export class PlannerScreenComponent implements OnInit {

  isJobsListExpanded: boolean;
  isShiftSuppliesPopupOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleListExpanded() {
    this.isJobsListExpanded = !this.isJobsListExpanded;
  }

  openShiftSupplies() {
    this.isShiftSuppliesPopupOpen = true;
  }

  closeShiftSupplies() {
    this.isShiftSuppliesPopupOpen = false;
  }
}
