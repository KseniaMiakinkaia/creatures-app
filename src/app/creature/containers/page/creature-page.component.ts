import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, switchMap, take, tap } from 'rxjs';

import { CreatureResponse } from '../../models/creature.model';
import { CreatureService } from '../../services/creature.service';

@Component({
  selector: 'app-creature-page',
  templateUrl: './creature-page.component.html',
  styleUrls: ['./creature-page.component.scss']
})
export class CreaturePageComponent implements OnInit {
  creatures!: Observable<CreatureResponse>;

  constructor(private readonly creatureService: CreatureService) {}

  ngOnInit() {
    this.loadCreatures();
  }

  performSearch(value: string) {
    this.creatures = this.creatureService.search(value);
  }

  loadCreatures(address?: string) {
    this.creatures = this.creatureService.getCreatures(address);
  }

  loadMore(address: string) {
    this.creatures = this.creatures.pipe(
      map(value => value.results),
      switchMap(value => {
        return this.creatureService.getCreatures(address).pipe(
          map(response => ({
            ...response,
            results: [...value, ...response.results],
          }))
        )
      })
    );
  }
}
