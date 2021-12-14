import { TestBed } from '@angular/core/testing';

import { TypeMouvementListService } from './type-mouvement-list.service';

describe('TypeMouvementListService', () => {
  let service: TypeMouvementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMouvementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
