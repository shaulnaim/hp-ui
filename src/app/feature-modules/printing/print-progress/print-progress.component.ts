import { Component, OnInit } from '@angular/core';
import { PrintProgressEntityModel, PrintProgressEntity } from 'printing-api';

@Component({
  selector: 'app-print-progress',
  templateUrl: './print-progress.component.html',
  styleUrls: ['./print-progress.component.scss']
})
export class PrintProgressComponent implements OnInit {

  printProgressEntity: PrintProgressEntity;
  state: string;
  jobName: string;
  percentage: number;

  totalTime: string;
  currentTime: string;
  remainingTime: string;

  constructor(private _printProgressEntityModel: PrintProgressEntityModel) { }

  ngOnInit() {

    this._printProgressEntityModel.observable.subscribe(entity => {
      this.printProgressEntity = entity;
    });

    this.state = "Now printing";
    this.jobName = "Ledo Medo";

    this.percentage = 0.50;
    this.currentTime = "00:00:05";
    this.totalTime = "00:01:36";
    this.remainingTime = "00:01:31";

  }

}
