import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hp-button-control',
  templateUrl: './hp-button-control.component.html',
  styleUrls: ['./hp-button-control.component.scss']
})
export class HpButtonControlComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
