import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieNightService {

  private apiUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }


  addNewMovieNight(): any{
    return this.http.post(this.apiUrl+"movienight", {});
  }
}
