import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entertainment, EntertainmentType } from 'src/app/models/entertainment.model';
import { OnlineEntertainment } from 'src/app/models/online-entertainment.model';
import { EntertainmentService } from './entertainment.service';
import { Cast } from 'src/app/models/Cast.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent {

  entertainment: Entertainment = {
    rating: 0,  
    onlineEntertainmentId: '',
    movieNightId: '',
    snekkies: [],
    type: EntertainmentType.MOVIE
  };

  onlineEntertainment: OnlineEntertainment = {
    title: '',
    duration: 0,
    rating: 0,
    posterPath: '',
    genres: [],
    releaseDate: new Date(),
    tmdbId: 0,
    season: null,
    episodeTitle: null,
    stillImagePath: null
  };
  casts: Cast[] = [];


  constructor(private activatedRoute: ActivatedRoute, private entertainmentService: EntertainmentService, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getEntertainment(params['id']);
    })
  }
  updateRating() {
    this.entertainmentService.putEntertainment(this.entertainment).subscribe((response: Entertainment) => {
      this.entertainment = response;
    });
  }
  onBackClick(){
    this.router.navigate(['onlineentertainment/id/'+this.entertainment.movieNightId]);
  }
  getEntertainment(id:string){
    this.entertainmentService.getEntertainments(id).subscribe((response: Entertainment) => {
      this.entertainment = response;
      if (response.onlineEntertainmentId) {
        this.getOnlineEntertainment(response.onlineEntertainmentId);
      }
    });
  }

  getOnlineEntertainment(onlineEntertainmentId: string): any {
     this.entertainmentService.getOnlineEntertainment(onlineEntertainmentId).subscribe((response: OnlineEntertainment) => {
      this.onlineEntertainment = response;
      this.getCast();
     });
  }
  getCast(): any {
    if(this.entertainment.type === 'MOVIE'){
      this.entertainmentService.getMovieCast(this.onlineEntertainment.tmdbId).subscribe((response: any) => {
        this.casts = response;
        console.log('entertainment', this.entertainment);
        console.log('onlineEntertainment', this.onlineEntertainment);
        console.log('cast', this.casts);
      });
    }else{
      console.log('entertainment', this.entertainment);
        console.log('onlineEntertainment', this.onlineEntertainment);
      this.entertainmentService.getSerieCast(this.onlineEntertainment.tmdbId).subscribe((response: any) => {
        this.casts = response;
        
        console.log('cast', this.casts);
      });
    }
  }



}
