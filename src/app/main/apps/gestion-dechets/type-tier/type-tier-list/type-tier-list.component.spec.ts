import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTierListComponent } from './type-tier-list.component';

describe('TypeTierListComponent', () => {
  let component: TypeTierListComponent;
  let fixture: ComponentFixture<TypeTierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
