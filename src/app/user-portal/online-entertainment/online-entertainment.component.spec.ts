import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEntertainmentComponent } from './online-entertainment.component';

describe('OnlineEntertainmentComponent', () => {
  let component: OnlineEntertainmentComponent;
  let fixture: ComponentFixture<OnlineEntertainmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineEntertainmentComponent]
    });
    fixture = TestBed.createComponent(OnlineEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
