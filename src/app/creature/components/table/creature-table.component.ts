import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, debounceTime, distinctUntilChanged, Subscription, filter } from 'rxjs';

import { LoadType } from '../../constants/creatures';
import { CreatureResponse } from '../../models/creature.model';

@Component({
  selector: 'app-creature-table',
  templateUrl: './creature-table.component.html',
  styleUrls: ['./creature-table.component.scss']
})
export class CreatureTableComponent implements OnInit, OnDestroy {
  @Input() creatures?: CreatureResponse;

  @Output() loadAnotherPage = new EventEmitter<string>();

  @Output() loadMore = new EventEmitter<string>();

  loadType = LoadType;

  loadTypeForm = new FormGroup({
    loadType: new FormControl(this.loadType.PAGINATION),
  });

  private subscription = new Subscription();

  ngOnInit() {
    this.subscription = fromEvent(window, 'scroll').pipe(
      debounceTime(100), 
      filter(() => this.loadTypeForm.get('loadType')?.value===this.loadType.SCROLL),
      distinctUntilChanged()).subscribe(() => {
        if (window.scrollY > document.documentElement.scrollHeight - window.innerHeight - 10) {
          if (this.creatures?.next) this.loadMore.emit(this.creatures?.next);
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLoadAnotherPage(address: string) {
    this.loadAnotherPage.emit(address);
  }
}
