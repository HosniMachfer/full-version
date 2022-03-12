import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEquipementListComponent } from './categorie-equipement-list.component';

describe('CategorieEquipementListComponent', () => {
  let component: CategorieEquipementListComponent;
  let fixture: ComponentFixture<CategorieEquipementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieEquipementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieEquipementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
