import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';
import { Type } from 'src/_model/type';
import { PokemonService } from 'src/_services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
//  public pokemons: Pokemon[] = [
//    {
//      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
//      number: 1,
//      name: "Bulbasaur",
//      types: [Type.Grass, Type.Poison]
//    },
//    {
//      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
//      number: 2,
//      name: "Ivysaur",
//      types: [Type.Grass, Type.Poison]
//    }
//  ];

  constructor(
    public pokemonService: PokemonService
  ) { }

  @Input()
  public pokemon: Pokemon | undefined;
  
  control = new FormControl();
  pokemons: string[] = [];
  inputPokemons: Observable<string[]> | undefined;

  ngOnInit() {
    this.inputPokemons = this.control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.pokemons.filter(pokemon => this._normalizeValue(pokemon).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}

