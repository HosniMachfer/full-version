import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleurListComponent } from './recycleur-list.component';

describe('RecycleurListComponent', () => {
  let component: RecycleurListComponent;
  let fixture: ComponentFixture<RecycleurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecycleurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
