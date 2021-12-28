import { TestBed } from '@angular/core/testing';

import { DechetListService } from './dechet-list.service';

describe('DechetListService', () => {
  let service: DechetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DechetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
