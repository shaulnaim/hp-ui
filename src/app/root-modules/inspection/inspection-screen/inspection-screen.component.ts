import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PrintProgressEntityModel } from "printing-api";
import * as anima from './InspectionScreenAnima';

@Component({
  selector: "app-inspection-screen",
  templateUrl: "./inspection-screen.component.html",
  styleUrls: ["./inspection-screen.component.scss"]
})
export class InspectionScreenComponent implements OnInit {
  private readonly _printedMetersSelector =
    "#kKAOSaV > div > div > div.footer > div.counter > div.a760024654m.anima-valign-text-middle > span > span.span1";
  private readonly _totalMetersSelector =
    "#kKAOSaV > div > div > div.footer > div.counter > div.a760024654m.anima-valign-text-middle > span > span.span3";

  constructor(
    private _elementRef: ElementRef,
    private _printProgressEntityModel: PrintProgressEntityModel
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    anima.initAnima();
    this._printProgressEntityModel.observable.subscribe(printProgressEntity => {
      this._elementRef.nativeElement.querySelector(this._printedMetersSelector).textContent = printProgressEntity.Printed;
      this._elementRef.nativeElement.querySelector(this._totalMetersSelector).textContent = "/ " + printProgressEntity.Total;
    });
  }
}
