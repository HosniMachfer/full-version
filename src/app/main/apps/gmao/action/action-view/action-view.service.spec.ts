import { TestBed } from '@angular/core/testing';

import { ActionViewService } from './action-view.service';

describe('ActionViewService', () => {
  let service: ActionViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
