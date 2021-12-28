import { TestBed } from '@angular/core/testing';

import { EtatMouvementListService } from './etat-mouvement-list.service';

describe('EtatMouvementListService', () => {
  let service: EtatMouvementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatMouvementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
