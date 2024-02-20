import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieNightListService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  public getAllMovieNights(): any {
    return this.http.get(this.apiUrl+"movienight");
  }
}
