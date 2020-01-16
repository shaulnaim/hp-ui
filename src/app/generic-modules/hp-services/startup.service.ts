import { Injectable } from '@angular/core';

import { Utils } from 'hp-common';

import { NotificationService } from './notification.service';

@Injectable()
export class StartupService {
  constructor(private utils: Utils, private notificationService: NotificationService) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.notificationService.onClientConnected.subscribe(msg => {
          this.utils._clientId = msg.ClientID;
          resolve(true);
      });
    });
  }
  
}
