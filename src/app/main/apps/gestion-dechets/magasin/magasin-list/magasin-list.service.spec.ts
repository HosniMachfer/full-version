import { TestBed } from '@angular/core/testing';

import { MagasinListService } from './magasin-list.service';

describe('MagasinListService', () => {
  let service: MagasinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagasinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
