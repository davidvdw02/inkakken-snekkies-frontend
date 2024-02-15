import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieNightFormService} from "./movie-night-form.service";
import {MovieNight} from "../../../models/movie-night.model";

@Component({
  selector: 'app-movie-night-form',
  templateUrl: './movie-night-form.component.html',
  styleUrls: ['./movie-night-form.component.scss']
})
export class MovieNightFormComponent {
  movieNightId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private movieNightFormService: MovieNightFormService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movieNightId = params['id'];
      this.checkIfMovieNightExists();
    })
  }

  checkIfMovieNightExists() {
    this.movieNightFormService.getMovieNight(this.movieNightId).subscribe((response: MovieNight) => {
      console.log(response)
    });
  }
}
