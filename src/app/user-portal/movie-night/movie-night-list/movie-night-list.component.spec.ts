import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNightListComponent } from './movie-night-list.component';

describe('MovieNightListComponent', () => {
  let component: MovieNightListComponent;
  let fixture: ComponentFixture<MovieNightListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNightListComponent]
    });
    fixture = TestBed.createComponent(MovieNightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
