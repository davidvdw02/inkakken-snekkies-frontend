import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SerieListService {
    private apiUrl: string;
    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
     }

    getSerieFromTMDB(serieId: number): any {
        return this.http.get(this.apiUrl + 'onlineentertainment/serie/' + serieId);
    }
    getSeasonFromTMDB(serieId: number, season: number): any {
        return this.http.get(this.apiUrl + 'onlineentertainment/serie/' + serieId+'/season/'+season);
    }
}