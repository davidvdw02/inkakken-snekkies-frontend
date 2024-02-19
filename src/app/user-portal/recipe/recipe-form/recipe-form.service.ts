import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPictureDto } from 'src/app/models/new.picture.dto.model';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeFormService {
    constructor(private http: HttpClient) { 
}

uploadImage(newImageDTO: NewPictureDto) {
    return this.http.post('http://localhost:8080/recipepicture', newImageDTO);
}
}