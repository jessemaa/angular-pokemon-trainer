import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Pokemon } from 'src/models/Pokemon'


@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  constructor (
    private readonly dataService: DataService
  ) { }

  public pokemons: Pokemon[] = [];

  ngOnInit(): void {
    for (let i: number = 1; i < 152; i++) {
      this.dataService.fetchPokemons(i)
        .then((data) => {
        data.image = data.sprites.other.dream_world.front_default;
        data.typesLen = data.types;
        this.pokemons.push(data);
        this.pokemons.sort((a, b) => a.id - b.id);
      });
    }
  }

}
