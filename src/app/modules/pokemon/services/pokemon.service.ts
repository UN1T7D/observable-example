import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ResponsePokemon } from '../interfaces/response-pokemon';
import { ListPokemon } from '../interfaces/listado-pokemon';
import { PokemonDetails } from '../interfaces/pokemon-details';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private readonly _API: string = '/api/v2/pokemon';

    constructor(
        private _http: HttpClient
    ) { }

    pokemons(): Observable<ResponsePokemon<ListPokemon[]>> {
        return this._http.get<ResponsePokemon<ListPokemon[]>>(`${this._API}/?limit=20&offset=20`);
    }

    detailsPokemon(id: string): Observable<PokemonDetails> {
        return this._http.get<PokemonDetails>(`${this._API}/${id}`)
    }

}
