import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-listado-pokemons',
    templateUrl: './listado-pokemons.component.html',
    styleUrls: ['./listado-pokemons.component.scss']
})
export class ListadoPokemonsComponent implements OnInit {

    public idPokemon: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    getIdPokemon(id: string) {
        this.idPokemon = id;
    }


}
