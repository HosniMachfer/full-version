import { TestBed } from '@angular/core/testing';

import { MouvementListService } from './mouvement-list.service';

describe('MouvementListService', () => {
  let service: MouvementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouvementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
