import { TestBed } from '@angular/core/testing';

import { ActionEditService } from './action-edit.service';

describe('ActionEditService', () => {
  let service: ActionEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
