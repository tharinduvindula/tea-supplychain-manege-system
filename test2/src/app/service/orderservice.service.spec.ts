import { TestBed, inject } from '@angular/core/testing';

import { OrderserviceService } from './orderservice.service';

describe('OrderserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderserviceService]
    });
  });

  it('should be created', inject([OrderserviceService], (service: OrderserviceService) => {
    expect(service).toBeTruthy();
  }));
});
