import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators'
import { Pokemon } from 'src/models/Pokemon';
import { PokemonResponse } from 'src/models/pokemon-response.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api: string = 'https://pokeapi.co/api/v2';

  private readonly pokemonCache$;
  public pokemon: Pokemon[] = [];
  public error: string = '';

  constructor(private readonly http: HttpClient) {
    this.pokemonCache$ = this.http.get<PokemonResponse>(`${this.api}/pokemon?limit=151`)
    .pipe(shareReplay(1))

  }

  // Get 1st Gen Pokemons (151 pokemons)
  fetchPokemon(): void {
    this.pokemonCache$
    .pipe(
        map((response: PokemonResponse) => {
          return response.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            ...this.getIdAndImage(pokemon.url)
          }));
        })
    )
    .subscribe(
      (pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
      },
      (errorResponse: HttpErrorResponse) => {
        this.error = errorResponse.message;
      }
    );
  }

  private getIdAndImage(url: string): any {
    const id = url.split('/').filter(Boolean).pop();
    return {
      id: Number(id),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    }
  }
}
