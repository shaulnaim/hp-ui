import { IKeyableData } from "hp-base-classes";
import { MEStationID } from "common-api";

export class LphEntity implements IKeyableData<LphEntityKey>{
    Key: LphEntityKey;
}

export class LphEntityKey{
    ID: MEStationID;

    constructor(meStationID : MEStationID)
    {
        this.ID = meStationID;
    }
}