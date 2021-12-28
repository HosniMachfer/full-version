import { TestBed } from '@angular/core/testing';

import { MvtstockListService } from './mvtstock-list.service';

describe('MvtstockListService', () => {
  let service: MvtstockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvtstockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
