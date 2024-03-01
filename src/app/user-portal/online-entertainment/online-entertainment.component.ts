import { OnlineEntertainment } from "src/app/models/online-entertainment.model";
import { OnlineEntertainmentService } from "./online-entertainment.service";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Entertainment, EntertainmentType } from "src/app/models/entertainment.model";

@Component({
  selector: 'app-online-entertainment',
  templateUrl: './online-entertainment.component.html',
  styleUrls: ['./online-entertainment.component.scss']
})
export class OnlineEntertainmentComponent {
  onlineEntertainmentMovies: OnlineEntertainment[] = [];
  onlineEntertainmentSeries: OnlineEntertainment[] = [];
  entertanment: Entertainment[] = [];
  seeItem: boolean = false;


  constructor(private onlineEntertainmentService: OnlineEntertainmentService, private activatedRoute: ActivatedRoute, private router:Router) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.onlineEntertainmentService.getEntertainments(params['id']).subscribe( (response: Entertainment[]) => {
        this.entertanment = response;
        for(let entertainment of response) {
          if(entertainment.type === EntertainmentType.MOVIE) {
            if (entertainment.onlineEntertainmentId) {
              this.onlineEntertainmentService.getOnlineEntertainment(entertainment.onlineEntertainmentId).subscribe((response: OnlineEntertainment) => {
                this.onlineEntertainmentMovies.push(response);
              })
            }
          } 
          if(entertainment.type === EntertainmentType.SHOW) {
            if (entertainment.onlineEntertainmentId) {
              this.onlineEntertainmentService.getOnlineEntertainment(entertainment.onlineEntertainmentId).subscribe((response: OnlineEntertainment) => {
                this.onlineEntertainmentSeries.push(response);
              })
            }
          }
        }
      })
    })
  }

  onEntertainmentCLick(onlineEntertainmentId: string){
    for(let entertainment of this.entertanment){
      if(entertainment.onlineEntertainmentId === onlineEntertainmentId){
        this.router.navigate(['entertainment/id/' + entertainment.id])
      }
    }
  }

  buttonClick(){
    this.seeItem = !this.seeItem;
  }
}
