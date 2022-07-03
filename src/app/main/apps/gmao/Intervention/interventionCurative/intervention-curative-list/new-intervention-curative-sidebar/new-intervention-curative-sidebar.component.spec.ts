import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInterventionCurativeSidebarComponent } from './new-intervention-curative-sidebar.component';

describe('NewInterventionCurativeSidebarComponent', () => {
  let component: NewInterventionCurativeSidebarComponent;
  let fixture: ComponentFixture<NewInterventionCurativeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInterventionCurativeSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInterventionCurativeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
