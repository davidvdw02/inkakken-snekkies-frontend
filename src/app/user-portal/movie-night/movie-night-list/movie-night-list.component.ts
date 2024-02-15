import {Component} from '@angular/core';
import {MovieNightListService} from "./movie-night-list.service";
import {MovieNight} from "../../../models/movie-night.model"
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-night-list',
  templateUrl: './movie-night-list.component.html',
  styleUrls: ['./movie-night-list.component.scss']
})
export class MovieNightListComponent {
  movieNightList: MovieNight[] = [];

  constructor(private movieNightListService: MovieNightListService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getAllMovieNights();
  }

  private getAllMovieNights() {
    this.movieNightListService.getAllMovieNights().subscribe(
      (response: MovieNight[]) => {
        this.movieNightList = response;
      }
    );
  }

  selectedMovieNight(movieNight: MovieNight) {
    this.router.navigate(['/user/movienight/id/' + movieNight.id])
  }
}
