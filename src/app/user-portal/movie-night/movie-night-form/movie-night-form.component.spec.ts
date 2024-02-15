import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNightFormComponent } from './movie-night-form.component';

describe('MovieNightFormComponent', () => {
  let component: MovieNightFormComponent;
  let fixture: ComponentFixture<MovieNightFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNightFormComponent]
    });
    fixture = TestBed.createComponent(MovieNightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
