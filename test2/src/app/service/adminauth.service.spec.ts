import { TestBed, inject } from '@angular/core/testing';

import { AdminauthService } from './adminauth.service';

describe('AdminauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthService]
    });
  });

  it('should be created', inject([AdminauthService], (service: AdminauthService) => {
    expect(service).toBeTruthy();
  }));
});
