import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEntertainmentItemComponent } from './online-entertainment-item.component';

describe('OnlineEntertainmentItemComponent', () => {
  let component: OnlineEntertainmentItemComponent;
  let fixture: ComponentFixture<OnlineEntertainmentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineEntertainmentItemComponent]
    });
    fixture = TestBed.createComponent(OnlineEntertainmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
