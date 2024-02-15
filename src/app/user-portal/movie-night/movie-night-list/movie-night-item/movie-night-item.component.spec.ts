import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNightItemComponent } from './movie-night-item.component';

describe('MovieNightItemComponent', () => {
  let component: MovieNightItemComponent;
  let fixture: ComponentFixture<MovieNightItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNightItemComponent]
    });
    fixture = TestBed.createComponent(MovieNightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
