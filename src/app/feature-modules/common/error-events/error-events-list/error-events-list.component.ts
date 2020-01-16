import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorEventsEntity, ErrorEventsEntityModel } from 'common-api';

@Component({
  selector: 'app-error-events',
  templateUrl: './error-events-list.component.html',
  styleUrls: ['./error-events-list.component.scss']
})

export class ErrorEventsListComponent implements OnInit {

  private _subscription: Subscription;
  private _errorEventsEntities: ErrorEventsEntity[];
  rowData : any;
  private gridApi : any;
  public _lastErrorEvent: ErrorEventsEntity;

  columnDefs = [
    {headerName: 'Event Name', field: 'eventName', resizable: true},
    {headerName: 'Description', field: 'description' , resizable: true},
    {headerName: 'Parameters', field: 'parameters', resizable: true},
    {headerName: 'What To Do', field: 'whatToDo', resizable: true},
    {headerName: 'Timestamp', field: 'timestamp', sort: 'desc', resizable: true}
];

  constructor(private _entityModel: ErrorEventsEntityModel) {
    this.rowData = [];    
  }

  OnGridReady(params) {
    this.gridApi = params.api;    
  }

  ngOnInit() {
    
    this._subscription = this._entityModel.getObservable().subscribe(ent => {
      this._errorEventsEntities = ent;      
      this.SetRowData();      
    });    
  }
  
 SetRowData()
 {  
   this.rowData =
     this._errorEventsEntities.map(function(event) {    
      return{
       eventName: event.Name, 
       description: event.UiDescription, 
       parameters: event.Parameters, 
       whatToDo : event.WhatToDo, 
       timestamp : event.Time
    }});
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}