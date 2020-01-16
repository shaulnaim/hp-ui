export enum PressStates {
    Off = "Off",
    Standby = "Standby",
    GetReady = "GetReady",
    Ready = "Ready",
    Print = "Print",
    Recovery = "Recovery",
    Pause = "Pause",
    Service = "Service",
    Init = "Init"
 }

export interface PressStateEntity {
    PressState: PressStates;
}
