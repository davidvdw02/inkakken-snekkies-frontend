import { TestBed } from '@angular/core/testing';

import { MovieNightService } from './movie-night.service';

describe('MovieNightService', () => {
  let service: MovieNightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
