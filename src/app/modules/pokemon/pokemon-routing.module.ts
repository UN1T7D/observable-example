import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPokemonsComponent } from './pages/listado-pokemons/listado-pokemons.component';

const routes: Routes = [
    {
        path: '',
        component: ListadoPokemonsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }
