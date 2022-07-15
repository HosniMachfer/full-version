import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionCurativeEditComponent } from './intervention-curative-edit.component';

describe('InterventionCurativeEditComponent', () => {
  let component: InterventionCurativeEditComponent;
  let fixture: ComponentFixture<InterventionCurativeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionCurativeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionCurativeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
