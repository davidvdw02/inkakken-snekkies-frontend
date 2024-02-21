import {Component, Input} from '@angular/core';
import {MovieNight} from "../../../../models/movie-night.model";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-night-item',
  templateUrl: './movie-night-item.component.html',
  styleUrls: ['./movie-night-item.component.scss']
})
export class MovieNightItemComponent {
  @Input() movieNight: MovieNight | null = null;
  formattedDate = '';

  constructor(private datePipe: DatePipe) {
  }
ngOnInit(){
  console.log(this.movieNight);
  this.formattedDate = this.datePipe.transform(this.movieNight?.date, 'dd-MM-yyy') || '';
}
}
