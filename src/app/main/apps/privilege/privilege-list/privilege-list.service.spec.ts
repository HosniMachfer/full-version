import { TestBed } from '@angular/core/testing';

import { PrivilegeListService } from './privilege-list.service';

describe('PrivilegeListService', () => {
  let service: PrivilegeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
