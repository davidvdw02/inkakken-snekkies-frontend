import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-attendee-popup',
  templateUrl: './add-attendee-popup.component.html',
  styleUrls: ['./add-attendee-popup.component.scss']
})
export class AddAttendeePopupComponent {
  attendeeName: string = '';

  constructor(public dialogRef: MatDialogRef<AddAttendeePopupComponent>) {
  }

  saveDialog() {
    this.dialogRef.close(this.attendeeName)
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
