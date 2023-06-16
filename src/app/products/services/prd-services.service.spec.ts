import { TestBed } from '@angular/core/testing';

import { PrdServicesService } from './prd-services.service';

describe('PrdServicesService', () => {
  let service: PrdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
