import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendeePopupComponent } from './add-attendee-popup.component';

describe('AddAttendeePopupComponent', () => {
  let component: AddAttendeePopupComponent;
  let fixture: ComponentFixture<AddAttendeePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAttendeePopupComponent]
    });
    fixture = TestBed.createComponent(AddAttendeePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
