import { Component } from '@angular/core';
import { OnlineRecipe } from 'src/app/models/online-recipe.model';
import { OnlineRecipeService } from './online-recipe.service';

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
  constructor(private onlineRecipeService: OnlineRecipeService) {}

  onSubmit() {
    this.onlineRecipeService.createOnlineRecipe(this.onlineRecipe).subscribe(data => console.log(data));
  }
}
