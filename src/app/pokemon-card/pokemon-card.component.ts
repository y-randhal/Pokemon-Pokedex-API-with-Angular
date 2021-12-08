import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  public pokemon: Pokemon | undefined;

  public leadingZero(str:string | number, size:number =3): string{
    let s = String(str);
       
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
