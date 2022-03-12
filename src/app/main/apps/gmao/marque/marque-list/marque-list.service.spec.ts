import { TestBed } from '@angular/core/testing';

import { MarqueListService } from './marque-list.service';

describe('MarqueListService', () => {
  let service: MarqueListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarqueListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
