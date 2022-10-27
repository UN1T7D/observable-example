import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TimeOutListenerService } from '../../services/time-out-listener.service';

@Component({
    selector: 'app-time-out',
    templateUrl: './time-out.component.html',
    styleUrls: ['./time-out.component.scss']
})
export class TimeOutComponent implements OnInit {

    public alertTimeOut: number = 0;
    public alertTimeOutProgress: number = 0;
    public hasFinisCount: boolean = false;


    constructor(
        private _timeOutListener$: TimeOutListenerService,
        private _router: Router
    ) {
        this.viewCountDown();
    }

    ngOnInit(): void {
    }

    viewCountDown() {
        let time: any;

        this._timeOutListener$.timer.subscribe({
            next: (value) => {

                if (value === environment.rangeTimeOut) {
                    clearInterval(time);
                }
                time = setInterval(() => {
                    if (value === 0) {
                        this.closeSession();
                        clearInterval(time);
                        return;
                    }
                    value = value - 1
                    if (value <= environment.alertTimeOut) {
                        this.hasFinisCount = true
                        this._timeOutListener$.disabledTimeReset = true;
                    } else {
                        this.hasFinisCount = false;
                        //this._timeOutListener$.disabledTimeReset = false;
                    }
                    this.alertTimeOut = value;
                }, 1000);
            },
        });
    }

    resetCountDown() {
        this._timeOutListener$.timerReset = environment.rangeTimeOut
    }



    closeSession() {
        sessionStorage.clear();
        localStorage.clear();
        this.hasFinisCount = false;
        console.log('sesiones cerradas')
        this._router.navigate(['/login']);
    }

}
