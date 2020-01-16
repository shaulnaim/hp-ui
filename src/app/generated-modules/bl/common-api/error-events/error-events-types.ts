

import { IKeyableData } from 'hp-base-classes';
import { Timestamp } from 'rxjs';


export class ErrorEventsEntity implements IKeyableData<ErrorEventsEntityKey>{
    Key: ErrorEventsEntityKey;
    Name: string;
    UiDescription: string;
    WhatToDo: string;
    Parameters: string;
    Time: Date ;   
}

export class ErrorEventsEntityKey{
    ID: string;
}