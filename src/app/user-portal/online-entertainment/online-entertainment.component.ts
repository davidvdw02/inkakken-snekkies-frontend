import { Component } from '@angular/core';
import {OnlineEntertainmentService} from "./online-entertainment.service";
import {OnlineEntertainment} from "../../models/online-entertainment.model";
import {ActivatedRoute} from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-online-entertainment',
  templateUrl: './online-entertainment.component.html',
  styleUrls: ['./online-entertainment.component.scss']
})
export class OnlineEntertainmentComponent {
  queryResult:  any;
  query: string = '';
  onlineEntertainment: OnlineEntertainment = {
    name: '',
    duration: 0,
    rating: 0,
    episode: 0,
    link: '',
    genres: []
  };


  constructor(private onlineEntertainmentService: OnlineEntertainmentService, private activatedRoute: ActivatedRoute,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.onlineEntertainmentService.getOnlineEntertainment(params['id']).subscribe( (response: OnlineEntertainment) => {
        this.onlineEntertainment = response;
      })
    })
  }

  onQuery() {
    this.onlineEntertainmentService.queryWithoutPage(this.query).subscribe((data: any) => { this.queryResult = data; console.log(data); });
  }
}
