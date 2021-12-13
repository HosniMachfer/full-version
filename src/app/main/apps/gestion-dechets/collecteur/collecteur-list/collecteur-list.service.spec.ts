import { TestBed } from '@angular/core/testing';

import { CollecteurListService } from './collecteur-list.service';

describe('CollecteurListService', () => {
  let service: CollecteurListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollecteurListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
