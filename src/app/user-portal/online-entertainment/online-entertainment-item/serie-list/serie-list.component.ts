import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SerieListService } from './serie-list.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent {
selectedSeason: any;
selectedSerie: any;
@Input() series: any;
@Output()  onSelectedSerieEpisode: EventEmitter<any> = new EventEmitter();

constructor(private serieListService: SerieListService) { }
onMediaClick(movie: any) {
    this.serieListService.getSerieFromTMDB(movie.id).subscribe((data: any) => {this.selectedSerie = data;});
  }

  onSeasonClick(season: number) {
    this.serieListService.getSeasonFromTMDB(this.selectedSerie.id, season).subscribe((data: any) => {this.selectedSeason = data;});
  }

  onEpisodeClick(episode: any) {
    this.onSelectedSerieEpisode.emit(episode);
    }
    makeSeasonUndefined() {
      this.selectedSeason = undefined;
      }

      makeSelectedSerieUndefined() {
      this.selectedSerie = undefined;
        }
  formatDate(dateString: string) {
    const date = new Date(dateString);
    if(date.getFullYear() > 0){
    return date.getFullYear()
    }
    return 'no date available'
  }

}
