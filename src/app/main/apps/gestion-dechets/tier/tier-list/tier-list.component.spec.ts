import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtstockListComponent } from './tier-list.component';

describe('MvtstockListComponent', () => {
  let component: MvtstockListComponent;
  let fixture: ComponentFixture<MvtstockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtstockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtstockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
