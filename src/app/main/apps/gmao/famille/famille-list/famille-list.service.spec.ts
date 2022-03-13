import { TestBed } from '@angular/core/testing';

import { FamilleListService } from './famille-list.service';

describe('FamilleListService', () => {
  let service: FamilleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
