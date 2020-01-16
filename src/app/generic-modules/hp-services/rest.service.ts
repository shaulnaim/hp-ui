import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RestService {
       
    constructor(private _logger: LoggerService, private _http: HttpClient) {}

    public get(uri: string, keys: any = null, param: any = null): Promise<any> {
        let searchParams = new HttpParams();
        if (param != null) {
            searchParams.append("data", JSON.stringify(param));
        }
        let response = this._http.get(uri, { observe: keys != null ? keys : "", params: searchParams });
        return response.toPromise();
    }

    public post(uri: string, data: any): Promise<any> {
        let sData = this.buildData(data);
        let response = this._http.post(uri, sData); 
        return response.toPromise();
    }

    public put(uri: string, data?: any): Promise<any> {
        let sData = this.buildData(data);
        let response = this._http.put(uri, sData);
        return response.toPromise();
    }

    public delete(uri: string, key: any): Promise<any> {
        //httpClient delete does not get body, use request instead
        let response = this._http.request('delete', uri, {body: key});
        return response.toPromise();
    }    

    private buildData(data: any) : string {   
        return data !== null ? JSON.stringify(data) : null;
    }
}
