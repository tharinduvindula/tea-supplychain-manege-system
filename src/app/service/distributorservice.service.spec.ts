import { TestBed, inject } from '@angular/core/testing';

import { DistributorserviceService } from './distributorservice.service';

describe('DistributorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributorserviceService]
    });
  });

  it('should be created', inject([DistributorserviceService], (service: DistributorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
