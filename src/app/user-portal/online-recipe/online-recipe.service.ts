import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnlineRecipe } from 'src/app/models/online-recipe.model';
import { Recipe } from 'src/app/models/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class OnlineRecipeService {

  constructor(private http: HttpClient) { }

  createOnlineRecipe (onlineRecipe: OnlineRecipe) {
    return this.http.post<OnlineRecipe>('http://localhost:8080/onlinerecipe', onlineRecipe);
  }

  getOnlineRecipe (id: string) { 
    return this.http.get<OnlineRecipe>('http://localhost:8080/recipe/onlinerecipe/' + id);
  }
  createRecipe(onlineRecipe: OnlineRecipe,  MovienighId: string) {
    const recipe: Recipe = {
      onlineRecipeId: onlineRecipe.id,
      movieNightId: MovienighId
    };
    return this.http.post<OnlineRecipe>('http://localhost:8080/recipe', recipe);
  }

  getRecipeByOnlineRecipe(onlineRecipeId: string){
    return this.http.get<Recipe>('http://localhost:8080/recipe/recipe/' + onlineRecipeId);
  }
}
