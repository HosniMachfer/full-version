import { TestBed } from '@angular/core/testing';

import { UniteListService } from './unite-list.service';

describe('UniteListService', () => {
  let service: UniteListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniteListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
