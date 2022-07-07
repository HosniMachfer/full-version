import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePanneListComponent } from './type-panne-list.component';

describe('TypePanneListComponent', () => {
  let component: TypePanneListComponent;
  let fixture: ComponentFixture<TypePanneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePanneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePanneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
