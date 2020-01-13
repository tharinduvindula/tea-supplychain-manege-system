import { TestBed, inject } from '@angular/core/testing';

import { EstateserviceService } from './estateservice.service';

describe('EstateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstateserviceService]
    });
  });

  it('should be created', inject([EstateserviceService], (service: EstateserviceService) => {
    expect(service).toBeTruthy();
  }));
});
