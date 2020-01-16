import { Component, OnInit } from '@angular/core';
import * as anima from './ShiftSuppliesAnima';

@Component({
  selector: 'app-shift-supplies',
  templateUrl: './shift-supplies.component.html',
  styleUrls: ['./shift-supplies.component.scss']
})
export class ShiftSuppliesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    anima.initAnima();
  }

}
