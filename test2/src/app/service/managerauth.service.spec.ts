import { TestBed, inject } from '@angular/core/testing';

import { ManagerauthService } from './managerauth.service';

describe('ManagerauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerauthService]
    });
  });

  it('should be created', inject([ManagerauthService], (service: ManagerauthService) => {
    expect(service).toBeTruthy();
  }));
});
