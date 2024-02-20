import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  putRecipe(recipe: Recipe) {
    return this.http.put(this.apiUrl+'recipe/'+recipe.id, recipe);
  }

  postDeviation(deviation: DeviatedIngredient) {
    return this.http.post(this.apiUrl+'deviatedingredient', deviation);
  }

  postIngredient(ingredient: Ingredient){
    return this.http.post(this.apiUrl+'ingredient', ingredient);
  }

  getRecipe(id: string) {
    return this.http.get(this.apiUrl+'recipe/' + id);
  }

  getIngredients() {
    return this.http.get(this.apiUrl+'ingredient');
  }



}
