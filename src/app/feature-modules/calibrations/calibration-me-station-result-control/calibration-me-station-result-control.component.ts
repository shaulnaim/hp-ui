import { Component, OnInit, Input } from '@angular/core';
import { CalibrationStatus } from 'hp-base-classes';
import { AutoBiasCalibrationOperationResultMEStationData } from 'calibrations-api';



@Component({
  selector: 'calibration-me-station-result-control',
  templateUrl: './calibration-me-station-result-control.component.html'
})
export class CalibrationMEStationResultComponent implements OnInit {
  @Input() public meStationResult : AutoBiasCalibrationOperationResultMEStationData;

  constructor() { }

  ngOnInit() {
  }

  getCalibrationStatus()
  {
    switch (this.meStationResult.CalibrationResult.Status) {
      case CalibrationStatus.Succeeded:
          return "Calibration Succeeded";
      case CalibrationStatus.SucceededWithWarning:
          return "Calibration Succeeded With Warning";
      case CalibrationStatus.Failed:
          return "Calibration Failed";
      case CalibrationStatus.FailedWithWarning:
          return "Calibration Failed With Warning";
      case CalibrationStatus.DidNotConverge:
          return "Calibration Did Not Converge";
      default:
          return "";
    }
  }
}
