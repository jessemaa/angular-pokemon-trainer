import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from 'src/models/Pokemon'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private readonly http: HttpClient
  ) { }

  pokemons: Pokemon[] = []; 

  // Get 1st Gen Pokemons (151 pokemons)
  async fetchPokemons(i: number) {
    try {
      const data: any = await this.http.get(this.api + `${i}`)
        .toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}
