import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  postRecipe(recipe: Recipe) {
    return this.http.post('http://localhost:8080/recipe', recipe);
  }

  postDeviation(deviation: any) {
    return this.http.post('http://localhost:8080/deviatedingredient', deviation);
  }
}
