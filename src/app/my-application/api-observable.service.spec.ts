import { TestBed, inject } from '@angular/core/testing';

import { ApiObservableService } from './api-observable.service';

describe('ApiObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiObservableService]
    });
  });

  it('should ...', inject([ApiObservableService], (service: ApiObservableService) => {
    expect(service).toBeTruthy();
  }));
});
