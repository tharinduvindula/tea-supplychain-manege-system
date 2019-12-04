import { TestBed, inject } from '@angular/core/testing';

import { SupervisorserviceService } from './supervisorservice.service';

describe('SupervisorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupervisorserviceService]
    });
  });

  it('should be created', inject([SupervisorserviceService], (service: SupervisorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
