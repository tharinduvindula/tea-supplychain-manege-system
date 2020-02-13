import { TestBed, inject } from '@angular/core/testing';

import { PacketserviceService } from './packetservice.service';

describe('PacketserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacketserviceService]
    });
  });

  it('should be created', inject([PacketserviceService], (service: PacketserviceService) => {
    expect(service).toBeTruthy();
  }));
});
