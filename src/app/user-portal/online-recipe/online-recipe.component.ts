import { Component } from '@angular/core';
import { OnlineRecipe } from 'src/app/models/online-recipe.model';
import { OnlineRecipeService } from './online-recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-online-recipe',
  templateUrl: './online-recipe.component.html',
  styleUrls: ['./online-recipe.component.scss'],
})
export class OnlineRecipeComponent {
  onlineRecipe: OnlineRecipe = {
    link: '',
    duration: undefined,
  };
  movienighId: string = '';
  constructor(private onlineRecipeService: OnlineRecipeService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.onlineRecipeService.getOnlineRecipe(params['id']).subscribe((response: OnlineRecipe) => {
        this.onlineRecipe = response;
      });
      this.movienighId = params['id'];
    });
  
  }
  onSubmit() {
    if(this.onlineRecipe.id === undefined) {
    this.onlineRecipeService.createOnlineRecipe(this.onlineRecipe)
      .pipe(
        flatMap((data) => {
          return this.onlineRecipeService.createRecipe(data, this.movienighId);
        })
      )
      .subscribe((data) => {
        this.router.navigate(['/recipe/id', data.id]);
      });
      return;
  }

  this.onlineRecipeService.getRecipeByOnlineRecipe(this.onlineRecipe.id).subscribe((data) => {
    this.router.navigate(['/recipe/id', data.id]);
  });

}
}
