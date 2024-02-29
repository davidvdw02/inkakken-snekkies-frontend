import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnlineEntertainment } from 'src/app/models/online-entertainment.model';
import { OnlineEntertainmentService } from '../online-entertainment.service';
import { EntertainmentType } from 'src/app/models/entertainment.model';

@Component({
  selector: 'app-online-entertainment-item',
  templateUrl: './online-entertainment-item.component.html',
  styleUrls: ['./online-entertainment-item.component.scss'],
})
export class OnlineEntertainmentItemComponent {
  isMovies = 1;
  movienightId: string = '';

  queryResult: any;
  query: string = '';
  @Input() onlineEntertainment: OnlineEntertainment = {
    title: '',
    duration: 0,
    rating: 0,
    episode: 0,
    posterPath: '',
    genres: [],
    releaseDate: new Date(),
  };

  constructor(
    private onlineEntertainmentService: OnlineEntertainmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movienightId = params['id'];
    });
  }

  onQuery() {
    if (this.query == '') return;
    if (this.isMovies == 1) {
      this.onlineEntertainmentService
        .queryMoviesWithoutPage(this.query)
        .subscribe((data: any) => {
          this.queryResult = data;
        });
    }
    if (this.isMovies == 0) {
      this.onlineEntertainmentService
        .querySeriesWithoutPage(this.query)
        .subscribe((data: any) => {
          this.queryResult = data;
        });
    }
  }

  onMediaTypeToggle() {
    this.onQuery();
  }

  onSelectedMovie(event: any) {
    this.onlineEntertainmentService
      .getMovieFromTMDB(event.id)
      .subscribe((data: OnlineEntertainment) => {
        this.postOnlineEntertainment(data, EntertainmentType.MOVIE);
      });
  }

  onSelectedSerieEpisode(event: any) {
    this.onlineEntertainmentService.getEpisodeFromTMDB(event.show_id, event.season_number, event.episode_number).subscribe((data: OnlineEntertainment) => {
      this.postOnlineEntertainment(data, EntertainmentType.SHOW);
    });
  }

  postOnlineEntertainment(onlineEntertainment: OnlineEntertainment, type: EntertainmentType) {
    this.onlineEntertainmentService
    .postOnlineEntertainment(onlineEntertainment)
    .subscribe((onlineEntertainmentWithId: OnlineEntertainment) => {
      this.onlineEntertainmentService
        .postEntertainment({
          movieNightId: this.movienightId,
          onlineEntertainmentId: onlineEntertainmentWithId.id,
          type: type,
        })
        .subscribe((data: any) => console.log(data));
    });
  }
}
