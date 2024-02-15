import {Component, Input} from '@angular/core';
import {MovieNight} from "../../../../models/movie-night.model";

@Component({
  selector: 'app-movie-night-item',
  templateUrl: './movie-night-item.component.html',
  styleUrls: ['./movie-night-item.component.scss']
})
export class MovieNightItemComponent {
  @Input() movieNight: MovieNight | null = null;


}
