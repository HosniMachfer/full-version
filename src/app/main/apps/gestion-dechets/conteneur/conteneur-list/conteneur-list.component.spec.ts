import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneurListComponent } from './conteneur-list.component';

describe('ConteneurListComponent', () => {
  let component: ConteneurListComponent;
  let fixture: ComponentFixture<ConteneurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteneurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteneurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
