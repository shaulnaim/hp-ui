import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as anima from './jobPropertiesAnima';
import { PlannerSlotEntity } from 'planner-api';

@Component({
  selector: 'app-job-properties',
  templateUrl: './job-properties.component.html',
  styleUrls: ['./job-properties.component.scss']
})
export class JobPropertiesComponent implements OnInit {

  //TODO should be changed to different type of entity, after implementation of App and BL layers 
  @Input() jobProperties: PlannerSlotEntity;
  @Output() onClose = new EventEmitter();

  private readonly closeButtonSelector = "#job-properties > div > div > div.group";
  private readonly nameSelector = "#job-properties > div > div > div.header > div.ledomedo";
  private readonly lengthSelector = "#job-properties > div > div > div.a1232";
  private readonly substrateSelector = "#job-properties > div > div > div.mohawk80eggshell";

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    anima.initAnima();

    this._elementRef.nativeElement.querySelector(this.nameSelector).textContent = this.jobProperties.JobDetails.Name;
    this._elementRef.nativeElement.querySelector(this.lengthSelector).textContent = this.jobProperties.JobDetails.Length;
    this._elementRef.nativeElement.querySelector(this.substrateSelector).textContent = this.jobProperties.SubstrateName;
    
    var closeBtn = this._elementRef.nativeElement.querySelector(this.closeButtonSelector);
    //Use of lambda expression and not anonymous method (otherwise we cannot refer to "this" in it)
    closeBtn.addEventListener("click", () => {
      this.onClose.emit();
    });
  }

}
