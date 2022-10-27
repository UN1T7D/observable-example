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

@Injectable()
export class HttpListenerInterceptor implements HttpInterceptor {

    constructor(
        private _timeOutListener: TimeOutListenerService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('interceptor')
        this._timeOutListener.timerReset = environment.rangeTimeOut;
        return next.handle(request);
    }
}
