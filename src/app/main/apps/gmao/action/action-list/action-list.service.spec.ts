import { TestBed } from '@angular/core/testing';

import { ActionListService } from './action-list.service';

describe('ActionService', () => {
  let service: ActionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
