import { TestBed } from '@angular/core/testing';

import { StatePilihMenuService } from './state-pilih-menu.service';

describe('StatePilihMenuService', () => {
  let service: StatePilihMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatePilihMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
