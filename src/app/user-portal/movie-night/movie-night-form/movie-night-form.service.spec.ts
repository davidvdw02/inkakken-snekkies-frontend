import { TestBed } from '@angular/core/testing';

import { MovieNightFormService } from './movie-night-form.service';

describe('MovieNightFormService', () => {
  let service: MovieNightFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNightFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
