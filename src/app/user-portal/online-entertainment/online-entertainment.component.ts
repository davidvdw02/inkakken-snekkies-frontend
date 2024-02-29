import { OnlineEntertainment } from "src/app/models/online-entertainment.model";
import { OnlineEntertainmentService } from "./online-entertainment.service";
import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Entertainment, EntertainmentType } from "src/app/models/entertainment.model";

@Component({
  selector: 'app-online-entertainment',
  templateUrl: './online-entertainment.component.html',
  styleUrls: ['./online-entertainment.component.scss']
})
export class OnlineEntertainmentComponent {
  onlineEntertainmentMovies: OnlineEntertainment[] = [];
  onlineEntertainmentSeries: OnlineEntertainment[] = [];
  seeItem: boolean = false;


  constructor(private onlineEntertainmentService: OnlineEntertainmentService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.onlineEntertainmentService.getEntertainments(params['id']).subscribe( (response: Entertainment[]) => {
        console.log(response);
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

  buttonClick(){
    this.seeItem = !this.seeItem;
  }
}
