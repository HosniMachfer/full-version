import { TestBed } from '@angular/core/testing';

import { MachineListService } from './machine-list.service';

describe('MachineListService', () => {
  let service: MachineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
