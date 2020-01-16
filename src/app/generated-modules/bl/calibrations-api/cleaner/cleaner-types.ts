import { Availability, OperationStates, CalibrationResult, StartStopOperationBase, CalibrationStatus } from 'hp-base-classes';
import { MEStationEntityKey, BidStationKey } from 'common-api';


export class CleanerCalibrationOperationData {
    public SelectedBidStationKey: BidStationKey;
    public CleanNumberOfBlanketCycles: number;
}

export class CleanerCalibrationOperation extends StartStopOperationBase {
    public CalibrationResult: CalibrationResult;
    public CommitState: OperationStates;
    public CommitAvailability: Availability;
    public CancelState: OperationStates;
    public CancelAvailability: Availability;
    public Data: CleanerCalibrationOperationData;
}
