import { TestBed } from '@angular/core/testing';

import { LocaliteListService } from './localite-list.service';

describe('LocaliteListService', () => {
  let service: LocaliteListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaliteListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
