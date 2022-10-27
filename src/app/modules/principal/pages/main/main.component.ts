import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { TimeOutListenerService } from 'src/app/modules/shared/modules/time-out/services/time-out-listener.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public title = 'materialApp Pink & Blue-grey / Pokemon';

    private click$: Observable<any> = fromEvent(document, 'click');
    private rightClick$: Observable<any> = fromEvent(document, 'auxclick');
    private mouseOver$: Observable<any> = fromEvent(document, 'mouseover');
    private wheel$: Observable<any> = fromEvent(document, 'wheel');


    constructor(
        private _router: Router,
        private _timeOutListener: TimeOutListenerService
    ) {
        this._router.events.subscribe({
            next: (value) => {
                if (value instanceof NavigationEnd) {
                    this._timeOutListener.timerReset = environment.rangeTimeOut;
                }

            },
        });

        this.subscribeToObservables();
    }

    ngOnInit() {
    }

    private listenerTime(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._timeOutListener.disabledTime.subscribe({
                next: (value) => resolve(value)
            });
        })
    }

    private async subscribeToObservables() {
        const response: boolean = await this.listenerTime()
        // console.log(`response`, response)

        this.click$.subscribe({
            next: () => {
                this._timeOutListener.disabledTime.subscribe({
                    next: (value) => {

                        if (!value) this._timeOutListener.timerReset = environment.rangeTimeOut;
                    }
                });
            }
        });
        this.rightClick$.subscribe({
            next: () => {
                this._timeOutListener.disabledTime.subscribe({
                    next: (value) => {

                        if (!value) this._timeOutListener.timerReset = environment.rangeTimeOut;
                    }
                });
            }
        });
        this.mouseOver$.subscribe({
            next: () => {
                this._timeOutListener.disabledTime.subscribe({
                    next: (value) => {

                        if (!value) this._timeOutListener.timerReset = environment.rangeTimeOut;
                    }
                });
            }
        });
        this.wheel$.subscribe({
            next: (value) => {
                this._timeOutListener.disabledTime.subscribe({
                    next: (value) => {

                        if (!value) this._timeOutListener.timerReset = environment.rangeTimeOut;
                    }
                });
            }
        });
    }
}
