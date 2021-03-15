import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';
import { Pokemon } from 'src/models/Pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  private readonly pokemonName: string = '';

  constructor(
      private readonly route: ActivatedRoute,
      private readonly pokemonDetailService: PokemonDetailService,
      private localStorageService: LocalStorageService) {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }

  collectPokemon() {
    this.localStorageService.collectedPokemons.push(this.pokemonDetailService.pokemon)
    this.localStorageService.set('collectedPokemons', JSON.stringify(this.localStorageService.collectedPokemons))
    console.log(this.localStorageService.collectedPokemons)
  }

}
