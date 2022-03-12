import { TestBed } from '@angular/core/testing';

import { CategorieEquipementListService } from './categorie-equipement-list.service';

describe('CategorieEquipementListService', () => {
  let service: CategorieEquipementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieEquipementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
