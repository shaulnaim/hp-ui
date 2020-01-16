import { IKeyableData } from 'hp-base-classes';


export class SubstrateEntity implements IKeyableData<SubstrateEntityKey>{
    Key: SubstrateEntityKey;
    Name: string;
}

export class SubstrateEntityKey{
    ID: number;
}
