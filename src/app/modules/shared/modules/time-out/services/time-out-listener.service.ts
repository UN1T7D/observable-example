import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TimeOutListenerService {

    private _time$: BehaviorSubject<number> = new BehaviorSubject<number>(environment.rangeTimeOut);
    private _disabledTime$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    get timer() {
        return this._time$.asObservable();
    }

    set timerReset(resetValue: number) {
        this._time$.next(resetValue);
    }
    get disabledTime() {
        return this._disabledTime$.asObservable();
    }

    set disabledTimeReset(resetValue: boolean) {
        this._disabledTime$.next(resetValue);
    }

}
