import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsineListComponent } from './usine-list.component';

describe('UsineListComponent', () => {
  let component: UsineListComponent;
  let fixture: ComponentFixture<UsineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
