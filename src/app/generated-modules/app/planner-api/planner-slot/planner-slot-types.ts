import { JobDetails, JobEntityKey } from "press-control-api";
import { SubstrateEntityKey } from "paper-handling-api";

export class PlannerSlotEntity{
    Key: PlannerSlotEntityKey;
    JobKey: JobEntityKey;
    JobDetails: JobDetails;
    SubstrateKey: SubstrateEntityKey;
    SubstrateName:string;
}

export class PlannerSlotEntityKey{
    ID: string;
}