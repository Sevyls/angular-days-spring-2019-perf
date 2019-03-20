import { TestBed } from '@angular/core/testing';

import { MyPreloadingStrategy } from './my-preloading-strategy';

describe('MyPreloadingStrategy', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPreloadingStrategy = TestBed.get(MyPreloadingStrategy);
    expect(service).toBeTruthy();
  });
});
