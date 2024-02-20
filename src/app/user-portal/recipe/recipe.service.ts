import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  putRecipe(recipe: Recipe) {
    return this.http.put('http://localhost:8080/recipe/'+recipe.id, recipe);
  }

  postDeviation(deviation: DeviatedIngredient) {
    return this.http.post('http://localhost:8080/deviatedingredient', deviation);
  }

  postIngredient(ingredient: Ingredient){
    return this.http.post('http://localhost:8080/ingredient', ingredient);
  }

  getRecipe(id: string) {
    return this.http.get('http://localhost:8080/recipe/' + id);
  }

  getIngredients() {
    return this.http.get('http://localhost:8080/ingredient');
  }



}
