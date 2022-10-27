import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonControllerService } from '../../controllers/pokemonController.service';
import { ListPokemon } from '../../interfaces/listado-pokemon';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

    @ViewChild(MatPaginator)
    paginator: MatPaginator | null = null;

    @Output()
    onIdPokemon: EventEmitter<string> = new EventEmitter<string>();

    public listPokemons: ListPokemon[] = [];
    public displayedColumns: string[] = ['name', 'url'];
    public dataSource = new MatTableDataSource<ListPokemon>();

    constructor(
        private _pokemonController: PokemonControllerService
    ) { }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.listPokemons = await this._pokemonController.getPokemons();
        this.dataSource.data = this.listPokemons;
        this.dataSource.paginator = this.paginator;
    }

    public pokemonSelected(pokemon: string) {
        this.onIdPokemon.emit(pokemon);
    }

}
