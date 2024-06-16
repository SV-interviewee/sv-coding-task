import { TestBed } from '@angular/core/testing';

import { SessionOverviewService } from './session-overview.service';

describe('SessionOverviewService', () => {
  let service: SessionOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
