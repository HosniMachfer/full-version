import { TestBed } from '@angular/core/testing';

import { TypeTierListService } from './type-tier-list.service';

describe('TypeTierListService', () => {
  let service: TypeTierListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTierListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
