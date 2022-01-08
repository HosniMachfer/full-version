import { TestBed } from '@angular/core/testing';

import { ConteneurListService } from './conteneur-list.service';

describe('ConteneurListService', () => {
  let service: ConteneurListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteneurListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
