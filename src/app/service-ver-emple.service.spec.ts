import { TestBed } from '@angular/core/testing';

import { ServiceVerEmpleService } from './ver-empleados/service-ver-emple.service';

describe('ServiceVerEmpleService', () => {
  let service: ServiceVerEmpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVerEmpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
