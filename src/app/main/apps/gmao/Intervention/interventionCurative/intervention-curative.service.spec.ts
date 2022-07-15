import { TestBed } from '@angular/core/testing';

import { InterventionCurativeService } from './intervention-curative.service';

describe('InterventionCurativeService', () => {
  let service: InterventionCurativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionCurativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
