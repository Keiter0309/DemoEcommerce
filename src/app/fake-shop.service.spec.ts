import { TestBed } from '@angular/core/testing';

import { FakeShopService } from './fake-shop.service';

describe('FakeShopService', () => {
  let service: FakeShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
