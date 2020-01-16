import { IKeyableData } from 'hp-base-classes';
import { SubstrateEntityKey } from 'paper-handling-api';


export class JobEntity implements IKeyableData<JobEntityKey>{
    Key: JobEntityKey;
    JobDetails: JobDetails;
    Substrate: SubstrateEntityKey;
}

export class JobEntityKey {
    ID: number;
}

export class JobDetails{
    Name: string;
    Length: number;
}

