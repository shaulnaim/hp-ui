import { IKeyableData } from 'hp-base-classes';

export enum MEStationID
{
    MEStation1 = "MEStation1",
    MEStation2 = "MEStation2",
    MEStation3 = "MEStation3",
    MEStation4 = "MEStation4",
    MEStation5 = "MEStation5",
    MEStation6 = "MEStation6"
}

export enum BidStationID
{
      BidStation1 = 0,
      BidStation2 = 1,
      BidStation3 = 2,
      BidStation4 = 3,
      BidStation5 = 4,
      BidStation6 = 5,
      BidStation7 = 6,
      BidStation8 = 7,
      BidStation9 = 8,
      BidStation10 = 9,
      BidStation11 = 10,
      BidStation12 = 11
}

export class MEStationEntity implements IKeyableData<MEStationEntityKey>{
    Key: MEStationEntityKey;
}

export class MEStationEntityKey{
    ID: MEStationID;

    constructor(meStationID : MEStationID)
    {
        this.ID = meStationID;
    }
}

export class BidStationKey{
  ID: BidStationID;

  constructor(bidStationID : BidStationID)
  {
      this.ID = bidStationID;
  }
}


