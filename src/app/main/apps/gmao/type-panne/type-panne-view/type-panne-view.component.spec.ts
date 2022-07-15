import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePanneViewComponent } from './type-panne-view.component';

describe('TypePanneViewComponent', () => {
  let component: TypePanneViewComponent;
  let fixture: ComponentFixture<TypePanneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePanneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePanneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
