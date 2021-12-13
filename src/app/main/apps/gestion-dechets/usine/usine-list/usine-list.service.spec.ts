import { TestBed } from '@angular/core/testing';

import { UsineListService } from './usine-list.service';

describe('UsineListService', () => {
  let service: UsineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
