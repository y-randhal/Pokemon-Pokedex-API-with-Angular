import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators'
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input()
  public 'pokemon': Pokemon;
  
  control = new FormControl();
  pokemons: string[] = ['001 Bulbasaur', '002 Ivysaur', '003 Venusaur', '004 Charmander', '005 Charmeleon' ,'006 Charizard'];
  filteredPokemons: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredPokemons = this.control.valueChanges.pipe(
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
  constructor() { }

}