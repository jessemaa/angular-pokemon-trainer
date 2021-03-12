import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app/services/data.service';
import { Pokemon } from 'src/models/Pokemon'


@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  constructor (
    private readonly dataService: DataService,
  ) { }

  get pokemon(): Pokemon[] {
    return this.dataService.pokemon;
  }

  ngOnInit(): void {
    this.dataService.fetchPokemon()
  }

}
