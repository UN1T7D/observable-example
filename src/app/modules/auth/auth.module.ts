import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule

    ]
})
export class AuthModule { }
