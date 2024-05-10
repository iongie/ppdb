import { TestBed } from '@angular/core/testing';

import { StateHasilSeleksiService } from './state-hasil-seleksi.service';

describe('StateHasilSeleksiService', () => {
  let service: StateHasilSeleksiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateHasilSeleksiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
