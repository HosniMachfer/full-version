import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionCurativeListComponent } from './intervention-curative-list.component';

describe('InterventionCurativeListComponent', () => {
  let component: InterventionCurativeListComponent;
  let fixture: ComponentFixture<InterventionCurativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionCurativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionCurativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
