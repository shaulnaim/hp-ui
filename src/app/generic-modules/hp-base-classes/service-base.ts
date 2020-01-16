import { Observer, Subscription, Observable } from 'rxjs';
import { filter, tap, publish, refCount } from 'rxjs/operators';
import * as _ from 'underscore';

import { LoggerService, RestService, NotificationService, ServiceLocator, ExceptionComponentSource, ErrorWithComponentSource } from 'hp-services';

import { IContent } from './common-interfaces';

export abstract class ServiceBase {

    _logger = ServiceLocator.getLoggerService();
    public contentObservable: Observable<any>;
    protected logger: LoggerService;
    protected restService: RestService;
    protected notificationService: NotificationService;
    private _onUIDataContentSubscription: Subscription;
    private _uiDataContentObservable: Observable<IContent>;
    private _observablesByKeys: Map<any[], Observable<IContent>> = new Map<any[], Observable<IContent>>();

    constructor(protected resourceName: string) {
        this.notificationService = ServiceLocator.getNotificationService();
        this.logger = ServiceLocator.getLoggerService();
        this.restService = ServiceLocator.getRestService();

        this._logger.debug("creating " + this.resourceName);
    };
    
    protected getObservableSingle(): Observable<IContent> {

        this._logger.debug("get observ " + this.resourceName);
        if (this._uiDataContentObservable === undefined) {
            this._uiDataContentObservable = Observable.create((observer: Observer<IContent>) => {
                this._logger.debug("Creating observable for resource " + this.resourceName);
                let subscriptionId: any;
                this.getSubscriptionId().then(id => {
                    this._logger.debug("Requesting UI data for resource " + this.resourceName);
                    subscriptionId = id;
                    this.sendSubscribeToServer(subscriptionId);
                });

                this._onUIDataContentSubscription = this.notificationService.onUIData
                    .pipe(filter(serverMessage => serverMessage.SubscriptionId === subscriptionId))
                    .pipe(tap(serverMessage => { this._logger.debug("Got UI data for resource " + this.resourceName); }))
                    .subscribe(serverMessage => {
                        observer.next(serverMessage.Content);
                    });

                return () => {
                    this._onUIDataContentSubscription.unsubscribe();
                    this.sendUnsubscribeToServer(subscriptionId);
                    this._uiDataContentObservable = undefined;
                };
            }).pipe(publish()).pipe(refCount());
        }
        return this._uiDataContentObservable;
    }

    protected getObservableAll(): Observable<IContent> {

        if (this._uiDataContentObservable === undefined) {

            let subscriptionId: any;
            this.getSubscriptionId().then(id => {
                subscriptionId = id;
                this.sendSubscribeAllToServer(subscriptionId);
            });

            this._uiDataContentObservable = Observable.create((observer: Observer<IContent>) => {

                this._onUIDataContentSubscription = this.notificationService.onUIData
                    .pipe(filter(serverMessage => serverMessage.SubscriptionId === subscriptionId))
                    .pipe(tap(serverMessage => { this._logger.debug("Got UI data for resource " + this.resourceName); }))
                    .subscribe(serverMessage => {
                        observer.next(serverMessage.Content);
                    });

                return () => {
                    this._onUIDataContentSubscription.unsubscribe();
                    this.sendUnsubscribeToServer(subscriptionId);
                    this._uiDataContentObservable = undefined;
                };
            }).pipe(publish()).pipe(refCount());
        }
        return this._uiDataContentObservable;
    }

    protected getObservableMany<TKey>(keys: TKey[]): Observable<IContent> {

        let keysArray = this.getKeysArrayIfExists(keys);

        if (keysArray === undefined) {
            
            keysArray = keys;

            let subscriptionId: any;
            this.getSubscriptionId().then(id => {
                subscriptionId = id;
                this.sendSubscribeManyToServer(subscriptionId, keysArray);
            });

            let observable = Observable.create((observer: Observer<IContent>) => {

                let onUIDataContentSubscriptionKeyable = this.notificationService.onUIData
                    .pipe(filter(serverMessage => serverMessage.SubscriptionId === subscriptionId))
                    .pipe(tap(serverMessage => { this._logger.debug("Got UI data for resource " + this.resourceName); }))
                    .subscribe(serverMessage => {
                        observer.next(serverMessage.Content);
                    });

                return () => {
                    onUIDataContentSubscriptionKeyable.unsubscribe();
                    this.sendUnsubscribeToServer(subscriptionId);
                    this._observablesByKeys.delete(keysArray);
                };
            }).pipe(publish()).pipe(refCount());

            this._observablesByKeys.set(keysArray, observable);
        }

        return this._observablesByKeys.get(keysArray);
    }

    protected sendSubscribeToServer(subscriptionID: any) {
        this._logger.debug(`_sendSubscribeToServer called for resource ${this.resourceName}`);
        this.restService.put(this.resourceName + `/subscribe/${subscriptionID}`)
            .then((responseData) => this._logger.debug(`Got response from subscribe to ${this.resourceName}`));
    }

    protected sendSubscribeAllToServer(subscriptionID: any) {
        this._logger.debug(`_sendSubscribeToServer called for resource ${this.resourceName}`);
        this.restService.put(this.resourceName + `/subscribe-all/${subscriptionID}`)
            .then((responseData) => this._logger.debug(`Got response from subscribe to ${this.resourceName}`));
    }

    protected sendSubscribeManyToServer(subscriptionID: any, keys: any[]) {
        this._logger.debug(`_sendSubscribeToServer called for resource ${this.resourceName} with keys ${keys ? keys.toString() : null}`);
        this.restService.put(this.resourceName + `/subscribe-many/${subscriptionID}`, keys)
            .then((responseData) => this._logger.debug(`Got response from subscribe to ${this.resourceName}`));
    }

    protected sendUnsubscribeToServer(subscriptionID: any) {
        this.restService.put(this.resourceName + `/unsubscribe/${subscriptionID}`)
            .then((responseData) => responseData);
    }

    private getSubscriptionId() {
        return this.restService.get(`Guid`);
    }

    private getKeysArrayIfExists<TKey>(keys: TKey[]): any {
        for (let keysArray of Array.from(this._observablesByKeys.keys())) {
            if(keys.length != keysArray.length) continue;
            
            let itemExistsCount = 0;
                for (let i = 0; i < keys.length; i++) {
                    for (let j = 0; j < keysArray.length; j++) {
                        if (_.isEqual(keys[i], keysArray[j]))
                            itemExistsCount++;
                    }
                }
            if (itemExistsCount === keys.length)
                return keysArray;
        }       

        return undefined;
    }
}
