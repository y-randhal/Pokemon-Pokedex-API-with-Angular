import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';
import { PokemonService } from 'src/_services/pokemon.service';

@Component({
  selector: 'app-team-planner',
  templateUrl: './team-planner.component.html',
  styleUrls: ['./team-planner.component.scss']
})
export class TeamPlannerComponent implements OnInit {
  @Input()
  public pokemon: Pokemon | undefined;
  
  constructor(
    public pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
  }

}
