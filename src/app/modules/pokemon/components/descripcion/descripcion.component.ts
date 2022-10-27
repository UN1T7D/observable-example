import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonControllerService } from '../../controllers/pokemonController.service';
import { PokemonDetails } from '../../interfaces/pokemon-details';

@Component({
    selector: 'app-descripcion',
    templateUrl: './descripcion.component.html',
    styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit, OnChanges {

    @Input()
    inIdPokemon: string = '';

    pokemon: PokemonDetails | null = null;

    constructor(
        private _pokemonController: PokemonControllerService
    ) { }

    ngOnInit(): void {
    }

    async ngOnChanges() {

        this.pokemon = await this._pokemonController.getDetailsPokemon(this.inIdPokemon);

    }

}
