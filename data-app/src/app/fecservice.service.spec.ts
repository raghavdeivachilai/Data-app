import { TestBed } from '@angular/core/testing';

import { FecserviceService } from './fecservice.service';

describe('FecserviceService', () => {
  let service: FecserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FecserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
