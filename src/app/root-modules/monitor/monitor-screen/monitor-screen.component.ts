import { Component, OnInit } from '@angular/core';
import * as anima from './MonitorScreenAnima';

@Component({
  selector: 'app-monitor-screen',
  templateUrl: './monitor-screen.component.html',
  styleUrls: ['./monitor-screen.component.scss']
})
export class MonitorScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    anima.initAnima();
  }

}
