import { Component } from '@angular/core';
import {OnlineEntertainmentService} from "./online-entertainment.service";
import {OnlineEntertainment} from "../../models/online-entertainment.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-online-entertainment',
  templateUrl: './online-entertainment.component.html',
  styleUrls: ['./online-entertainment.component.scss']
})
export class OnlineEntertainmentComponent {
  onlineEntertainment: OnlineEntertainment = {
    name: '',
    duration: 0,
    rating: 0,
    episode: 0,
    link: '',
    genres: []
  };


  constructor(private onlineEntertainmentService: OnlineEntertainmentService, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.onlineEntertainmentService.getOnlineEntertainment(params['id']).subscribe( (response: OnlineEntertainment) => {
        this.onlineEntertainment = response;
      })
    })


  }

}
