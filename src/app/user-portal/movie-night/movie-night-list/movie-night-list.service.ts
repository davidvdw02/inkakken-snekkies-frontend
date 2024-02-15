import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieNightListService {

  constructor(private http: HttpClient) { }

  public getAllMovieNights(): any {
    return this.http.get("http://localhost:8080/movienight");
  }
}
