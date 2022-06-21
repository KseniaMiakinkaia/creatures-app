import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaturePageComponent } from './containers/page/creature-page.component';
import { CreatureTableComponent } from './components/table/creature-table.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreaturePageComponent,
    CreatureTableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreaturePageComponent,
  ]
})
export class CreatureModule { }
