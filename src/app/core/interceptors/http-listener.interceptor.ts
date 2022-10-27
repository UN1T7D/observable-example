import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeOutListenerService } from 'src/app/modules/shared/modules/time-out/services/time-out-listener.service';
import { environment } from 'src/environments/environment';
import { ServerHostMap } from '../app/app-config';
import { AppConfigService } from '../app/app.config.service';

@Injectable()
export class HttpListenerInterceptor implements HttpInterceptor {

    private readonly PATH_API_REGEX = /^\/api\/(v1\/|[a-z])+/;
    private readonly PATH_API_SERVER_REGEX = /[a-z0-9]+$/;


    constructor(
        private _timeOutListener: TimeOutListenerService
    ) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler): Observable<HttpEvent<unknown>> {

        let regexResult = this.PATH_API_REGEX.exec(request.url);

        let path: string = '';
        let pathKeyServer: string = '';

        if (regexResult !== null) path = regexResult[0];

        regexResult = this.PATH_API_SERVER_REGEX.exec(path);

        if (regexResult !== null) pathKeyServer = regexResult[0];

        const server: ServerHostMap = Object.assign({
            ...AppConfigService.settings?.server,
        });

        type ObjectKey = keyof typeof server;

        let hostname = server[pathKeyServer as ObjectKey];

        hostname = hostname ? hostname : '';

        const newUrl = hostname + request.url;


        this._timeOutListener.timerReset = environment.rangeTimeOut;

        console.log(`newUrl`, newUrl)

        return next.handle(
            request.clone({
                url: newUrl
            })
        );
    }
}
