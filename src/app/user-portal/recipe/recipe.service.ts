import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  putRecipe(recipe: Recipe) {
    return this.http.put('http://localhost:8080/recipe/'+recipe.id, recipe);
  }

  postDeviation(deviation: any) {
    return this.http.post('http://localhost:8080/deviatedingredient', deviation);
  }

  getRecipe(id: string) {
    return this.http.get('http://localhost:8080/recipe/' + id);
  }

}
