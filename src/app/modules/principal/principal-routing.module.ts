import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'pokemons',
                loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonModule)
            },
            {
                path: 'observable',
                loadChildren: () => import('../observable/observable.module').then(m => m.ObservableModule)
            },
            {
                path: '**',
                redirectTo: 'pokemons'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule { }
