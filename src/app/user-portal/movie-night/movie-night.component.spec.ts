import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNightComponent } from './movie-night.component';

describe('MovieNightComponent', () => {
  let component: MovieNightComponent;
  let fixture: ComponentFixture<MovieNightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNightComponent]
    });
    fixture = TestBed.createComponent(MovieNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
