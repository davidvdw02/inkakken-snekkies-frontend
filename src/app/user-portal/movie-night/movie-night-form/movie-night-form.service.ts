import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieNight} from "../../../models/movie-night.model";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieNightFormService {

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getMovieNight(movieNightId: string): any {
    return this.http.get(this.apiUrl+"movienight/" + movieNightId);
  }

  getAllExistingAttendees(): any {
    return this.http.get(this.apiUrl+"attendee");
  }

  addAttendee(name: string): any {
    return this.http.post(this.apiUrl+"attendee", {name: name})
  }

  putMovieNight(id: string, movieNight: MovieNight): any {
    return this.http.put(this.apiUrl+"movienight/" + id, movieNight);
  }

  getOnlineRecipe(movieNightId: string): any {
    return this.http.get(this.apiUrl+"recipe/onlinerecipe/" + movieNightId);
  }
}
