import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMvtstockListComponent } from './type-tier-list.component';

describe('TypeMvtstockListComponent', () => {
  let component: TypeMvtstockListComponent;
  let fixture: ComponentFixture<TypeMvtstockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMvtstockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMvtstockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
