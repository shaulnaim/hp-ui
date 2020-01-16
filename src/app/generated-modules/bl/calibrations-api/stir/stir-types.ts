import { Availability, OperationStates, CalibrationResult, StartStopOperationBase} from 'hp-base-classes';
import { BidStationKey } from 'common-api';


export class StiRCalibrationOperationData{
    public SelectedBidStationKey: BidStationKey;
    public HeatNumberOfBlanketCycles: number;
    public CleanNumberOfBlanketCycles: number;
}
export class StiRCalibrationOperation extends StartStopOperationBase{
    public CalibrationResult: CalibrationResult;
    public CommitState: OperationStates;
    public CommitAvailability: Availability;
    public CancelState: OperationStates;
    public CancelAvailability: Availability;
    public Data: StiRCalibrationOperationData;
}
