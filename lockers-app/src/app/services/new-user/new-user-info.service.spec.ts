import { TestBed } from '@angular/core/testing';

import { NewUserInfoService } from './new-user-info.service';

describe('NewUserInfoService', () => {
  let service: NewUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
