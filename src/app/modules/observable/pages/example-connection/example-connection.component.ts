import { Component, OnInit } from '@angular/core';
import { ExampleObservableService } from '../../service/example-observable.service';

@Component({
    selector: 'app-example-connection',
    templateUrl: './example-connection.component.html',
    styleUrls: ['./example-connection.component.scss']
})
export class ExampleConnectionComponent implements OnInit {

    public countView: number = 0;

    constructor(
        private _exampleObservable: ExampleObservableService
    ) {
        this.observableListener();
    }

    ngOnInit(): void {
    }

    observableListener() {
        this._exampleObservable.count.subscribe({
            next: (value) => {
                this.countView = value;
            }
        });
    }

    aumentarContador() {
        this._exampleObservable.countReset = this.countView + 1;
        console.log('Clic Componente Padre');
    }

}
