import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Entertainment } from 'src/app/models/entertainment.model';
import { OnlineEntertainment } from 'src/app/models/online-entertainment.model';

@Injectable({
  providedIn: 'root'
})
export class OnlineEntertainmentService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getEntertainments(movieNightId: string): any {
    return this.http.get(this.apiUrl + 'entertainment/' + movieNightId);
  }
  getOnlineEntertainment(onlineEntertainmentId: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/' + onlineEntertainmentId);
  }

  postEntertainment(entertainment: Entertainment): any {
    return this.http.post(this.apiUrl + 'entertainment', entertainment);
  }
  postOnlineEntertainment(onlineEntertainment: OnlineEntertainment): any {
    return this.http.post(this.apiUrl + 'onlineentertainment', onlineEntertainment);
  }


  queryMoviesWithoutPage(query: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/movie/query/'+ query);
  }

  getMovieFromTMDB(movieId: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/movie/' + movieId);
  }

  querySeriesWithoutPage(query: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/serie/query/'+ query);
  }

  getEpisodeFromTMDB(serieId: string, season: string, episode: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/serie/' + serieId + '/season/' + season + '/episode/' + episode);
  }
  
}
