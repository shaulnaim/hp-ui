import { Availability, OperationStates, CalibrationResult, StartStopOperationBase } from 'hp-base-classes';
import { LphEntityKey } from 'common-api';

export enum LphFocusScanBasePosition {
  DefaultPosition = "DefaultPosition",
  LastCalibratedPosition = "LastCalibratedPosition",
}

export namespace LphFocusScanBasePosition {
    export function values() {
      return Object.keys(LphFocusScanBasePosition).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
}

export class ManualLphFocusCalibrationOperationData{
    public LphData : ManualLphFocusCalibrationOperationLphData[];
}

export class ManualLphFocusCalibrationOperationLphData{
    public LphKey : LphEntityKey;
    public LphFocusScanBasePosition : LphFocusScanBasePosition;
    public LphFocusCalculationData : ManualLphFocusCalculationData

    constructor(lphKey : LphEntityKey, 
            lphFocusScanBasePosition : LphFocusScanBasePosition, 
            lphFocusCalculationData : ManualLphFocusCalculationData) {
        this.LphKey = lphKey;
        this.LphFocusScanBasePosition = lphFocusScanBasePosition;
        this.LphFocusCalculationData = lphFocusCalculationData;
    }
}

export class ManualLphFocusCalculationData{
    public OptimalPrintPositionFront : number
    public OptimalPrintPositionRear : number
}

export class ManualLphFocusCalibrationOperation extends StartStopOperationBase{
    public CalibrationResult : CalibrationResult;
    public CommitState : OperationStates;
    public CommitAvailability : Availability;
    public CancelState : OperationStates;
    public CancelAvailability : Availability; 
    public Data : ManualLphFocusCalibrationOperationData;     
}