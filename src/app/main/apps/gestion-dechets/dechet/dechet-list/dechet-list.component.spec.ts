import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechetListComponent } from './dechet-list.component';

describe('DechetListComponent', () => {
  let component: DechetListComponent;
  let fixture: ComponentFixture<DechetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
