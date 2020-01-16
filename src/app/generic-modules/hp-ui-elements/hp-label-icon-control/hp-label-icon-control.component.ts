import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hp-label-icon-control',
  templateUrl: './hp-label-icon-control.component.html',
  styleUrls: ['./hp-label-icon-control.component.scss']
})
export class HpLabelIconControlComponent implements OnInit {

  @Input() iconSrc: string;
  @Input() text: string;
  
  constructor() { }

  ngOnInit() {
  }

}
