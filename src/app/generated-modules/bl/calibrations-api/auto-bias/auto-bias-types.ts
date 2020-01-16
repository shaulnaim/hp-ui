import { Availability, OperationStates, CalibrationResult, StartStopOperationBase, CalibrationStatus } from 'hp-base-classes';
import { MEStationEntityKey } from 'common-api';


export class AutoBiasCalibrationOperationData{
    public SelectedMEStations : MEStationEntityKey[];
    public Result : AutoBiasCalibrationOperationResult;
}

export class AutoBiasCalibrationOperationResult{
    public MEStations : AutoBiasCalibrationOperationResultMEStationData[];
}

export class AutoBiasCalibrationOperationResultMEStationData{
    public MEStationKey : MEStationEntityKey;
    public CalibrationResult : CalibrationResult;
}

export class AutoBiasCalibrationOperation extends StartStopOperationBase{
    public CalibrationResult : CalibrationResult;
    public CommitState : OperationStates;
    public CommitAvailability : Availability;
    public CancelState : OperationStates;
    public CancelAvailability : Availability; 
    public Data : AutoBiasCalibrationOperationData;     
}