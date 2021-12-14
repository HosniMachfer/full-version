import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMouvementListComponent } from './type-mouvement-list.component';

describe('TypeMouvementListComponent', () => {
  let component: TypeMouvementListComponent;
  let fixture: ComponentFixture<TypeMouvementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMouvementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMouvementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
