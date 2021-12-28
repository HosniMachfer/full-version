import { TestBed } from '@angular/core/testing';

import { EtatConteneurListService } from './etat-conteneur-list.service';

describe('EtatConteneurListService', () => {
  let service: EtatConteneurListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatConteneurListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
