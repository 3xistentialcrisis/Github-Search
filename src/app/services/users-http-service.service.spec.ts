import { TestBed } from '@angular/core/testing';

import { UsersHttpServiceService } from './users-http-service.service';

describe('UsersHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersHttpServiceService = TestBed.get(UsersHttpServiceService);
    expect(service).toBeTruthy();
  });
});
