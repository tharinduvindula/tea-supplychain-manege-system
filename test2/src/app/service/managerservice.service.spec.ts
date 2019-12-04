import { TestBed, inject } from '@angular/core/testing';

import { ManagerserviceService } from './managerservice.service';

describe('ManagerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerserviceService]
    });
  });

  it('should be created', inject([ManagerserviceService], (service: ManagerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
