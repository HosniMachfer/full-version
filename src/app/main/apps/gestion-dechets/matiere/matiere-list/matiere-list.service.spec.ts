import { TestBed } from '@angular/core/testing';

import { MatiereListService } from './matiere-list.service';

describe('MatiereListService', () => {
  let service: MatiereListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiereListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
