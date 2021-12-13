import { TestBed } from '@angular/core/testing';

import { RecycleurListService } from './recycleur-list.service';

describe('RecycleurListService', () => {
  let service: RecycleurListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecycleurListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
