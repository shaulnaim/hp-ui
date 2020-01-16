import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommandModelBase, CommandBase } from 'hp-base-classes';


@Component({
  selector: 'command-control',
  templateUrl: './hp-command-control.component.html',
  styleUrls: ['./hp-command-control.component.scss'] 
  
})
export class CommandControl<T extends CommandBase> implements OnInit {

  protected _commandSubscription: Subscription;
  command: T;
  @Input() protected commandModel: CommandModelBase<T>
  @Input() private label: string;
  @Input() commandButtonClassName : string;

  constructor() {         
  }

  ngOnInit() {
  
      if(this.commandModel  !== null){
            this._commandSubscription = this.commandModel.observable.subscribe(cmd => {this.command=cmd});
       }
    }

  ngOnDestroy(){
    if(this._commandSubscription !== null){
        this._commandSubscription.unsubscribe();
      } 
    }

  activate(){
    if(this.commandModel  !== null){
          this.commandModel.activate(this.command).then(x => x);
      }
    }    
 
  getLabel(){ 
    return this.label;
  }

  
}
