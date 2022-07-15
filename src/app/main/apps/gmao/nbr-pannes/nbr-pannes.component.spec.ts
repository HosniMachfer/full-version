import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrPannesComponent } from './nbr-pannes.component';

describe('NbrPannesComponent', () => {
  let component: NbrPannesComponent;
  let fixture: ComponentFixture<NbrPannesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbrPannesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
