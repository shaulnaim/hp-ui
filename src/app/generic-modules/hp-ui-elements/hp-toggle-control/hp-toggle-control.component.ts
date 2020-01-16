import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hp-toggle-control',
  templateUrl: './hp-toggle-control.component.html',
  styleUrls: ['./hp-toggle-control.component.scss']
})
export class HpToggleControlComponent implements OnInit {

  @Input() leftTitle: string;
  @Input() rightTitle: string;
  @Output() leftSelectionChange = new EventEmitter();

  isLeftSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.isLeftSelected = true;
  }

  toggleSelection() {
    this.isLeftSelected = !this.isLeftSelected;
    this.leftSelectionChange.emit(this.isLeftSelected);
  }

}
