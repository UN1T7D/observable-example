import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ExampleConnectionComponent } from './pages/example-connection/example-connection.component';
import { ChildComponent } from './components/child/child.component';
import { SubChildComponent } from './components/sub-child/sub-child.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Child2Component } from './components/child2/child2.component';


@NgModule({
    declarations: [
        ExampleConnectionComponent,
        ChildComponent,
        SubChildComponent,
        Child2Component,
    ],
    imports: [
        CommonModule,
        ObservableRoutingModule,
        MatChipsModule,
        MatButtonModule,
    ]
})
export class ObservableModule { }
