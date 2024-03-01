import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment.model';

@Injectable({
    providedIn: 'root'
})
export class EntertainmentService {

    constructor(private http: HttpClient) { }

    getOnlineEntertainment(onlineEntertainmentId: string): any {
        return this.http.get('http://localhost:8080/onlineentertainment/' + onlineEntertainmentId);
    }

    getEntertainments(id: string): any {
        return this.http.get('http://localhost:8080/entertainment/' + id);
    }

    getMovieCast(tmdbMovieId:number){
        return this.http.get('http://localhost:8080/onlineentertainment/movie/' + tmdbMovieId+'/cast');
    }

    getSerieCast(tmdbSerieId:number){
        return this.http.get('http://localhost:8080/onlineentertainment/serie/' + tmdbSerieId+'/cast');
    }

    putEntertainment(entertainment: Entertainment): any {
        return this.http.put('http://localhost:8080/entertainment/' + entertainment.id, entertainment);
    }

}