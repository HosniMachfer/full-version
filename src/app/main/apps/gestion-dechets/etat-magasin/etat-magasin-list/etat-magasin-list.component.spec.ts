import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMagasinListComponent } from './etat-magasin-list.component';

describe('EtatMagasinListComponent', () => {
  let component: EtatMagasinListComponent;
  let fixture: ComponentFixture<EtatMagasinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMagasinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMagasinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
