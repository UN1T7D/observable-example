import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule)
    },
    {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
