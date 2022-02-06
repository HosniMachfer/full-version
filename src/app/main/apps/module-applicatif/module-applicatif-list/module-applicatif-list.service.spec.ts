import { TestBed } from '@angular/core/testing';

import { ModuleApplicatifListService } from './module-applicatif-list.service';

describe('ModuleApplicatifListService', () => {
  let service: ModuleApplicatifListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleApplicatifListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
