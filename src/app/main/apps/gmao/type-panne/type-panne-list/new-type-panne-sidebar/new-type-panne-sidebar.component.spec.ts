import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypePanneSidebarComponent } from './new-type-panne-sidebar.component';

describe('NewTypePanneSidebarComponent', () => {
  let component: NewTypePanneSidebarComponent;
  let fixture: ComponentFixture<NewTypePanneSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTypePanneSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypePanneSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
