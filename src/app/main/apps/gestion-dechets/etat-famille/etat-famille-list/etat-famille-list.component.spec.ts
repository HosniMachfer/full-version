import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFamilleListComponent } from './etat-famille-list.component';

describe('EtatFamilleListComponent', () => {
  let component: EtatFamilleListComponent;
  let fixture: ComponentFixture<EtatFamilleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatFamilleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFamilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
