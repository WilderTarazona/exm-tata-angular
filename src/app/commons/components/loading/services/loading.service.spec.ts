import { TestBed } from '@angular/core/testing';

import { CgLoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: CgLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
