import { Injectable } from '@angular/core';

@Injectable()
export class Utils
{
  _clientId: string;

  public getUrlParameter(key, fallback) {
    var value = decodeURIComponent(window.location.search.substring(1)).split('&')
     .map((v) => { return v.split("=") })
     .filter((v) => { return (v[0] === key) ? true : false })
     .reduce((prev, curv, index, array) => { return curv; }, undefined);

     return value? value[1] : fallback;
  }
}