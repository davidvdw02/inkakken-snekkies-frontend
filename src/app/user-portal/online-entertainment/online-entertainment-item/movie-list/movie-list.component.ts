import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnlineEntertainmentService } from '../../online-entertainment.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: any;
  @Output() onSelectedMovie: EventEmitter<any> = new EventEmitter();

  constructor() { }
  onMediaClick(movie: any) {
    this.onSelectedMovie.emit(movie);
    }

    formatDate(dateString: string) {
      const date = new Date(dateString);
      if(date.getFullYear() > 0){
      return date.getFullYear()
      }
      return 'no date available'
    }
}
