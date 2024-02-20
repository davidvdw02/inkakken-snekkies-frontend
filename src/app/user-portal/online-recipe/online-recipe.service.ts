import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnlineRecipe } from 'src/app/models/online-recipe.model';
import { Recipe } from 'src/app/models/recipe.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OnlineRecipeService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  createOnlineRecipe (onlineRecipe: OnlineRecipe) {
    return this.http.post<OnlineRecipe>(this.apiUrl+'onlinerecipe', onlineRecipe);
  }

  getOnlineRecipe (id: string) { 
    return this.http.get<OnlineRecipe>(this.apiUrl+'recipe/onlinerecipe/' + id);
  }
  createRecipe(onlineRecipe: OnlineRecipe,  MovienighId: string) {
    const recipe: Recipe = {
      onlineRecipeId: onlineRecipe.id,
      movieNightId: MovienighId
    };
    return this.http.post<OnlineRecipe>(this.apiUrl+'recipe', recipe);
  }

  getRecipeByOnlineRecipe(onlineRecipeId: string){
    return this.http.get<Recipe>(this.apiUrl+'recipe/recipe/' + onlineRecipeId);
  }
  getAllIngredients() {
    return this.http.get(this.apiUrl+'ingredient');
  }
}
