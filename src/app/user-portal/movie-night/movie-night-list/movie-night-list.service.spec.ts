import { TestBed } from '@angular/core/testing';

import { MovieNightListService } from './movie-night-list.service';

describe('MovieNightListService', () => {
  let service: MovieNightListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNightListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
