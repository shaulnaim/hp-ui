import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { ErrorWithComponentSource, ExceptionComponentSource } from './error-handler.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Config, Utils } from 'hp-common';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor
{  
    private _baseURL: string;      

    constructor(private _config : Config, private _utils: Utils ){
        this._baseURL = 'http://' + _utils.getUrlParameter('ip', 'localhost') + ':' + Config.REST_PORT + '/api/';        
    }  
   
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        let modifiedRequest = request.clone({
            url: this.buildUrl(request.url),
            headers: this.processHeaders(request.headers)
        });      
   
        return next.handle(modifiedRequest).pipe(catchError(this.handleError));
    }

    private buildUrl(requestUrl: string): string
    {
        if(requestUrl === null)
        throw ('uri is null');
        return this._baseURL + requestUrl;        
    }

    private processHeaders(originalHeaders: HttpHeaders): HttpHeaders{
        var headers = new HttpHeaders({'ClientID': this._utils._clientId, 
                                       'Accept': 'application/json', 
                                       'Content-Type': 'application/json'});
        
        for(let key of originalHeaders .keys())
        {
            headers = headers.append(key, originalHeaders.get(key))
        }

        return headers;
    }

    private handleError(error: HttpErrorResponse){
    
        let errWithComponent = new ErrorWithComponentSource();
       
        errWithComponent.componentSource = ExceptionComponentSource.UI;            
        errWithComponent.message = "Error: "+error.message;
        console.log(error);
                    
       return throwError(errWithComponent)
    }
}