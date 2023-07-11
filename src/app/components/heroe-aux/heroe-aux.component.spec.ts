import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeAuxComponent } from './heroe-aux.component';

describe('HeroeAuxComponent', () => {
  let component: HeroeAuxComponent;
  let fixture: ComponentFixture<HeroeAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
