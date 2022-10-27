import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TimeOutModule } from "../shared/modules/time-out/time-out.module";
import { MainComponent } from './pages/main/main.component';
import { PrincipalRoutingModule } from './principal-routing.module';


@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        PrincipalRoutingModule,


        FlexLayoutModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        HttpClientModule,
        TimeOutModule
    ]
})
export class PrincipalModule { }
