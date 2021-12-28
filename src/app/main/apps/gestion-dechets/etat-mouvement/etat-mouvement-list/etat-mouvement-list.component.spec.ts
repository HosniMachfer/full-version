import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMouvementListComponent } from './etat-mouvement-list.component';

describe('EtatMouvementListComponent', () => {
  let component: EtatMouvementListComponent;
  let fixture: ComponentFixture<EtatMouvementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMouvementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMouvementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
