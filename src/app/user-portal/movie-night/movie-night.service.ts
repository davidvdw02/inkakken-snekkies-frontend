import { Injectable } from '@angular/core';
import {MovieNight} from "../../models/movie-night.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieNightService {

  constructor(private http: HttpClient) { }


  addNewMovieNight(): any{
    return this.http.post("http://localhost:8080/movienight", {});
  }
}
