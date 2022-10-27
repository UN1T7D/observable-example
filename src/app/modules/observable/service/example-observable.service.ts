import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExampleObservableService {

    private _count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    get count() {
        return this._count$.asObservable();
    }

    set countReset(value: number) {
        this._count$.next(value);
    }
}
