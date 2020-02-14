import { TestBed, inject } from '@angular/core/testing';

import { BoxserviceService } from './boxservice.service';

describe('BoxserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxserviceService]
    });
  });

  it('should be created', inject([BoxserviceService], (service: BoxserviceService) => {
    expect(service).toBeTruthy();
  }));
});
