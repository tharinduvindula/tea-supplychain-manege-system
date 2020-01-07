import { TestBed, inject } from '@angular/core/testing';

import { LoaderserviceService } from './loaderservice.service';

describe('LoaderserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderserviceService]
    });
  });

  it('should be created', inject([LoaderserviceService], (service: LoaderserviceService) => {
    expect(service).toBeTruthy();
  }));
});
