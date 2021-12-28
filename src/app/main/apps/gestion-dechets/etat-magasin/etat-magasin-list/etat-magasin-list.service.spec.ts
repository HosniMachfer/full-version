import { TestBed } from '@angular/core/testing';

import { EtatMagasinListService } from './etat-magasin-list.service';

describe('EtatMagasinListService', () => {
  let service: EtatMagasinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatMagasinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
