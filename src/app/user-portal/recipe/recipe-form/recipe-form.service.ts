import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeFormService {
    constructor(private http: HttpClient) { 
}

    putRecipeWithPictures(recipe: Recipe, pictures: any) {
        console.log(pictures, recipe)
    }


    private turnTo64(picture: any):string {
        const reader = new FileReader();
        reader.onloadend = () => {
            return reader.result as string;
        }
        return '';
    }

}