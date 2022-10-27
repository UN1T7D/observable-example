import { Injectable } from '@angular/core';
import { ListPokemon } from '../interfaces/listado-pokemon';
import { PokemonDetails } from '../interfaces/pokemon-details';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonControllerService {

    constructor(private _pokemonService: PokemonService) { }


    getPokemons(): Promise<ListPokemon[]> {
        return new Promise<ListPokemon[]>((resolve, reject) => {
            this._pokemonService.pokemons().subscribe({
                next: (response) => {
                    if (response.count > 0) {
                        const pokemons: ListPokemon[] = response.results.map(pokemon => {
                            return { ...pokemon, id: pokemon.url.split('/').slice(6).join().replace(',', '') }
                        });
                        resolve(pokemons)
                    } else {
                        resolve([])
                    }
                },
                error: () => resolve([])
            });
        })
    }

    getDetailsPokemon(id: string): Promise<PokemonDetails | null> {
        return new Promise<PokemonDetails | null>((resolve, reject) => {
            this._pokemonService.detailsPokemon(id).subscribe({
                next: (response) => response ? resolve(response) : resolve(null),
                error: () => resolve(null)
            });
        })
    }
}
