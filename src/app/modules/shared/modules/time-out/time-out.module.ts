import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';



import { TimeOutComponent } from './components/time-out/time-out.component';
import { ConvertNumberToTimePipe } from './pipes/convert-number-to-time.pipe';



@NgModule({
    declarations: [
        TimeOutComponent,
        ConvertNumberToTimePipe
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatChipsModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    exports: [
        TimeOutComponent
    ]
})
export class TimeOutModule { }
