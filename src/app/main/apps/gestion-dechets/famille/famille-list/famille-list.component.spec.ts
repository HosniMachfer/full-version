import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleListComponent } from './famille-list.component';

describe('FamilleListComponent', () => {
  let component: FamilleListComponent;
  let fixture: ComponentFixture<FamilleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
