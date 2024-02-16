import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieNightFormService} from "./movie-night-form.service";
import {MovieNight} from "../../../models/movie-night.model";
import {DatePipe} from "@angular/common";
import {Attendee} from "../../../models/attendee.model";
import {MatDialog} from "@angular/material/dialog";
import {AddAttendeePopupComponent} from "./add-attendee-popup/add-attendee-popup.component";

@Component({
  selector: 'app-movie-night-form',
  templateUrl: './movie-night-form.component.html',
  styleUrls: ['./movie-night-form.component.scss']
})
export class MovieNightFormComponent {
  movieNightId: string = '';
  movieNight: MovieNight = {
    id: '',
    date: '',
    attendees: [],
    location: ''
  };
  existingAttendees: Attendee[] = [];



  constructor(private activatedRoute: ActivatedRoute,
              private movieNightFormService: MovieNightFormService,
              private datePipe: DatePipe,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movieNightId = params['id'];
      this.checkIfMovieNightExists();
      this.getAllExistingAttendees();
    })
  }

  checkIfMovieNightExists() {
    this.movieNightFormService.getMovieNight(this.movieNightId).subscribe(
      (response: MovieNight) => {
      response.date = <string>this.datePipe.transform(response.date, 'yyyy-MM-dd');

      this.movieNight = response;
    });
  }

  getAllExistingAttendees() {
    this.movieNightFormService.getAllExistingAttendees().subscribe(
      (response: Attendee[]) => {
        this.existingAttendees = response;
        this.existingAttendees.push({id: undefined,name: 'Add New Attendee'});
      });
  }

  onAttendeeChange(attendeeName?: any) {
    if(attendeeName.name == 'Add New Attendee') {
      this.handleAddAttendeeDialog();
    }
  }

  handleAddAttendeeDialog() {
    const dialogRef = this.dialog.open(AddAttendeePopupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(
      (response: string) => {
        if (response != undefined && response.trim() != '') {
          this.movieNightFormService.addAttendee(response).subscribe(
            (response: Attendee) => {
              console.log("dialog response " + response.id + response.name)
              this.getAllExistingAttendees();
            });
        }
      });
  }

  addAttendee() {
    this.movieNight.attendees.push({id: '', name: ' '});
  }

  onSubmit() {
    this.movieNightFormService.putMovieNight(this.movieNightId, this.movieNight).subscribe(
      () => {
        //todo route naar volgende pagina
      }
    )
  }
}
