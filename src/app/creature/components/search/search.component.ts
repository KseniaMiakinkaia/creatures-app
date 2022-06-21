import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() valueChanged = new EventEmitter<string>();

  onValueChange(value: string, event: Event) {
    if (value.length < 3 && (event as InputEvent).data) return;
    this.valueChanged.emit(value);
  }
}
