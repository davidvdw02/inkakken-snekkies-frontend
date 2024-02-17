import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieNight} from "../../../models/movie-night.model";

@Injectable({
  providedIn: 'root'
})
export class MovieNightFormService {

  constructor(private http: HttpClient) { }

  getMovieNight(movieNightId: string): any {
    return this.http.get("http://localhost:8080/movienight/" + movieNightId);
  }

  getAllExistingAttendees(): any {
    return this.http.get("http://localhost:8080/attendee");
  }

  addAttendee(name: string): any {
    return this.http.post("http://localhost:8080/attendee", {name: name})
  }

  putMovieNight(id: string, movieNight: MovieNight): any {
    return this.http.put("http://localhost:8080/movienight/" + id, movieNight);
  }

  getOnlineRecipe(movieNightId: string): any {
    return this.http.get("http://localhost:8080/recipe/onlinerecipe/" + movieNightId);
  }
}
