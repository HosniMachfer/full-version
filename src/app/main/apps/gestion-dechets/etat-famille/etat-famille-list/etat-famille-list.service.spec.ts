import { TestBed } from '@angular/core/testing';

import { EtatFamilleListService } from './etat-famille-list.service';

describe('EtatFamilleListService', () => {
  let service: EtatFamilleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatFamilleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
