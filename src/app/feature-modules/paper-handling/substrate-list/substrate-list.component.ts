import { Component, OnInit, OnDestroy, Injector, ReflectiveInjector} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';

import { SubstrateEntity, SubstrateEntityKey, SubstrateEntityModel } from 'paper-handling-api';

@Component({
    selector: 'app-substrate-list',
    templateUrl: './substrate-list.component.html',
    styleUrls: ['./substrate-list.component.scss'],
})
export class SubstrateListComponent implements OnInit, OnDestroy {

    substrates: SubstrateEntity[];
    substrates2: SubstrateEntity[];
    firstSubstrates: SubstrateEntity[];
    lastSubstrates: SubstrateEntity[];
    lastSubstrates2: SubstrateEntity[];
    private _subscription: Subscription;
    private _subscriptionAll2: Subscription;
    private _subscriptionFirst: Subscription;
    private _subscriptionLast1: Subscription;
    private _subscriptionLast2: Subscription;
    private _substrateId: number = 0;
    private _updated: number = 0;
    substrateNameInput : string = "";

    constructor(private _injector: Injector, private _substratelistManagerForAll1: SubstrateEntityModel, private _substratelistManagerForAll2: SubstrateEntityModel, private _substratelistManagerForManyFirst: SubstrateEntityModel, private _substratelistManagerForManyLast: SubstrateEntityModel, private _substratelistManagerForManyLast2: SubstrateEntityModel) {
    }

    public ngOnInit() {
        this._subscription = this._substratelistManagerForAll1.getObservable().subscribe(list => {
            this.substrates = list;
        });
    }

    public ngOnDestroy() {
        if (this._subscription !== undefined) {
            this._subscription.unsubscribe();
        }
    }

    subscribeToAllSubstratesAgain() {
        this._subscriptionAll2 = this._substratelistManagerForAll2.getObservable().subscribe(list => {
            this.substrates2 = list
        });
    }

    unsubscribeAll1() {
        if (this._subscription !== undefined)
            this._subscription.unsubscribe();
    }

    unsubscribeAll2() {
        if (this._subscriptionAll2 !== undefined)
            this._subscriptionAll2.unsubscribe();
    }

    subscribeToFirstSubstrates() {
        let keys = this.substrates.map(sub => sub.Key);
        let k = keys.splice(keys.length - 2, 2);
        this._subscriptionFirst = this._substratelistManagerForManyFirst.getObservable(k).subscribe(list => {
            this.firstSubstrates = list
        });
    }

    subscribeToLastSubstrates() {
        let keys = this.substrates.map(sub => sub.Key);
        let k = keys.splice(0, keys.length - 2);
        this._subscriptionLast1 = this._substratelistManagerForManyLast.getObservable(k).subscribe(list => {
            this.lastSubstrates = list
        });
    }

    subscribeToLastSubstrates2() {
        let keys = this.substrates.map(sub => sub.Key);
        let k = keys.splice(0, keys.length - 2);
        this._subscriptionLast2 = this._substratelistManagerForManyLast2.getObservable(k).subscribe(list => {
            this.lastSubstrates2 = list
        });
    }

    unsubscribeFirst() {
        if (this._subscriptionFirst !== undefined)
            this._subscriptionFirst.unsubscribe();
    }

    unsubscribeLast1() {
        if (this._subscriptionLast1 !== undefined)
            this._subscriptionLast1.unsubscribe();
    }

    unsubscribeLast2() {
        if (this._subscriptionLast2 !== undefined)
            this._subscriptionLast2.unsubscribe();
    }

    add(substrateName) {
        let substrate = new SubstrateEntity();
        substrate.Key = new SubstrateEntityKey();
        substrate.Name = substrateName;

        this._substratelistManagerForAll1.add(substrate).then(result => {
            let ent = result
        });
    }

    protected update(substrateName, updateValue) {
        let substrate = new SubstrateEntity();
        substrate.Key = this.substrates.find(x => x.Name == substrateName).Key;
        substrate.Name = updateValue;

        this._substratelistManagerForAll1.update(substrate).then(result => {
            let ent = result
        });
    }

    protected delete(substrateName) {
        if (this.substrates !== null && this.substrates.length > 0) {
            let key: SubstrateEntityKey;
            key = this.substrates.find(x => x.Name == substrateName).Key as SubstrateEntityKey;

            this._substratelistManagerForAll1.delete(key).then(result => {
                result
            });
        }
    }

    canAddSubstrate(substrateName ) {
        return (substrateName == '' || substrateName == undefined) ? false : !this.substrates.find(x => x.Name == substrateName);
    }

}
