import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureTableComponent } from './creature-table.component';

describe('CreatureTableComponent', () => {
  let component: CreatureTableComponent;
  let fixture: ComponentFixture<CreatureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatureTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
