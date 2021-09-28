import { TestBed } from '@angular/core/testing';

import { CiscoService } from './cisco.service';

describe('CiscoService', () => {
  let service: CiscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
