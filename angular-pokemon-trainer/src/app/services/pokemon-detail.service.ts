import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/models/Pokemon";

@Injectable( {
    providedIn: 'root'
})

export class PokemonDetailService {
    public pokemon: Pokemon;

    constructor(private readonly http: HttpClient) {}

    public fetchPokemonByName(name: string): void {
        this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .subscribe((pokemon: Pokemon) => {
            this.pokemon = pokemon;
        });
    }
}