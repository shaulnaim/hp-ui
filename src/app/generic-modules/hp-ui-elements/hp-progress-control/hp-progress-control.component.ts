import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hp-progress-control',
  templateUrl: './hp-progress-control.component.html',
  styleUrls: ['./hp-progress-control.component.scss']
})
export class HpProgressControlComponent implements OnInit {

  controlWidth: number;
  
  @Input() percentage:number;
  
  @ViewChild('ctrl') ctrl: ElementRef;

  constructor() { }

  ngOnInit() {
  //#TODO avoid handling presentation attributes in code
    this.controlWidth = this.ctrl.nativeElement.parentElement.attributes["width"].value ;

  }

}
