import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatConteneurListComponent } from './etat-conteneur-list.component';

describe('EtatConteneurListComponent', () => {
  let component: EtatConteneurListComponent;
  let fixture: ComponentFixture<EtatConteneurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatConteneurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatConteneurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
