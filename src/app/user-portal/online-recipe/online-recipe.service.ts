import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnlineRecipe } from 'src/app/models/online-recipe.model';

@Injectable({
  providedIn: 'root'
})
export class OnlineRecipeService {

  constructor(private http: HttpClient) { }

  createOnlineRecipe (onlineRecipe: OnlineRecipe) {
    return this.http.post<OnlineRecipe>('http://localhost:8080/onlinerecipe', onlineRecipe);
  }

}
