import { TestBed } from '@angular/core/testing';

import { OnlineEntertainmentService } from './online-entertainment.service';

describe('OnlineEntertainmentService', () => {
  let service: OnlineEntertainmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineEntertainmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
