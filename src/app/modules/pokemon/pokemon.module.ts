import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';



import { ListadoPokemonsComponent } from './pages/listado-pokemons/listado-pokemons.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';


@NgModule({
    declarations: [
        ListadoPokemonsComponent,
        TablaComponent,
        DescripcionComponent
    ],
    imports: [
        CommonModule,
        PokemonRoutingModule,
        HttpClientModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatChipsModule
    ]
})
export class PokemonModule { }
