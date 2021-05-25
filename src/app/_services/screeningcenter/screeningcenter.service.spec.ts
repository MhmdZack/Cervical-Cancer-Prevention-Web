import { TestBed } from '@angular/core/testing';

import { ScreeningcenterService } from './screeningcenter.service';

describe('ScreeningcenterService', () => {
  let service: ScreeningcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
