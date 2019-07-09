import { TestBed } from '@angular/core/testing';

import { BindingServiceService } from './binding-service.service';

describe('BindingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BindingServiceService = TestBed.get(BindingServiceService);
    expect(service).toBeTruthy();
  });
});
