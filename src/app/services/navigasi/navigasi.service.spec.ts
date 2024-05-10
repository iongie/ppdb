import { TestBed } from '@angular/core/testing';

import { NavigasiService } from './navigasi.service';

describe('NavigasiService', () => {
  let service: NavigasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
