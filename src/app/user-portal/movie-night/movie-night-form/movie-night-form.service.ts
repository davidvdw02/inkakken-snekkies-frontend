import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieNightFormService {

  constructor(private http: HttpClient) { }

  getMovieNight(movieNightId: string): any {
    return this.http.get("http://localhost:8080/movienight/" + movieNightId);
  }
}
