import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePanneEditComponent } from './type-panne-edit.component';

describe('TypePanneEditComponent', () => {
  let component: TypePanneEditComponent;
  let fixture: ComponentFixture<TypePanneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePanneEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePanneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
