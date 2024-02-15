import { Component } from '@angular/core';
import {MovieNightService} from "./movie-night.service";
import {MovieNight} from "../../models/movie-night.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-night',
  templateUrl: './movie-night.component.html',
  styleUrls: ['./movie-night.component.scss']
})
export class MovieNightComponent {

  constructor(private movieNightService: MovieNightService, private router: Router) {
  }

  addMovieNight() {
    this.movieNightService.addNewMovieNight().subscribe(
      (response: MovieNight ) => {
        this.router.navigate(['/user/movienight/id/' + response.id])
      });
  };
}
