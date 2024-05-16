import { TestBed } from '@angular/core/testing';

import { StateMenuService } from './state-menu.service';

describe('StateMenuService', () => {
  let service: StateMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
