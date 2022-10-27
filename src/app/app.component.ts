import { Component } from '@angular/core';
import { AppConfigService } from './core/app/app.config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'materialApp Pink & Blue-grey / Pokemon';

    constructor(
        private _appConfigService: AppConfigService
    ) {

    }
}
