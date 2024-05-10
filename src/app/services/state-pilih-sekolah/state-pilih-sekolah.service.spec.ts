import { TestBed } from '@angular/core/testing';

import { StatePilihSekolahService } from './state-pilih-sekolah.service';

describe('StatePilihSekolahService', () => {
  let service: StatePilihSekolahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatePilihSekolahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
