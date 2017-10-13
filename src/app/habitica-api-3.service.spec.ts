import { TestBed, inject } from '@angular/core/testing';

import { HabiticaApi3Service } from './habitica-api-3.service';

describe('HabiticaApi3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HabiticaApi3Service]
    });
  });

  it('should be created', inject([HabiticaApi3Service], (service: HabiticaApi3Service) => {
    expect(service).toBeTruthy();
  }));
});
