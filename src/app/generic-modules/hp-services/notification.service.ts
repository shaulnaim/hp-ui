import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { uuid } from 'uuid'

import { Utils, Config } from 'hp-common';
import { IContent, IServerMessageContent, ClientConnected } from 'hp-base-classes';

import { WebSocketService } from './websocket.service';
import { LoggerService } from './logger.service';

enum SERVER_MESSAGE_TYPES {
    ResourceNotification = "ResourceNotification",
    Connect = "Connect"
}

interface IServerMessage {
    Type: SERVER_MESSAGE_TYPES;
    ResourceName: string;
    SubscriptionId: uuid;
    Content: IServerMessageContent;
}

@Injectable()
export class NotificationService {
    public onUIData: Observable<IServerMessage>;
    public onClientConnected: Observable<ClientConnected>;
    private onServerMessage: Observable<IServerMessage>;
    private _wsService: WebSocketService;

    constructor(utils: Utils, private _logger: LoggerService) {
        console.log(window);
        let wsURL = 'ws://' + window.location.hostname + ':' + Config.REST_PORT + '/ws';
        this._wsService = new WebSocketService(wsURL, _logger);
        this.onServerMessage = this._wsService.onMessage
            .pipe(filter((msg: string) => msg !== null && msg !== 'keep_alive'))
            .pipe(map((msg: string) => <IServerMessage>JSON.parse(msg)));
        this.onUIData = this.onServerMessage
            .pipe(filter((serverMessage: IServerMessage) => serverMessage.Type === SERVER_MESSAGE_TYPES.ResourceNotification))
            .pipe(map((serverMessage: IServerMessage) => serverMessage));
        this.onClientConnected = this.onServerMessage
            .pipe(filter((serverMessage: IServerMessage) => serverMessage.Type === SERVER_MESSAGE_TYPES.Connect))
            .pipe(map((serverMessage: IServerMessage) => serverMessage.Content as ClientConnected));
    };
}
