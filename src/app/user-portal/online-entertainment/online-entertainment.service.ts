import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OnlineEntertainmentService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getOnlineEntertainment(movieNightId: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/movienight/' + movieNightId);
  }

  queryWithoutPage(query: string): any {
    return this.http.get(this.apiUrl + 'onlineentertainment/query/'+ query);
  }

}
