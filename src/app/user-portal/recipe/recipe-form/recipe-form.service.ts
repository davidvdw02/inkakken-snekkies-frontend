import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPictureDto } from 'src/app/models/new.picture.dto.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RecipeFormService {
    private apiUrl: string;
    constructor(private http: HttpClient) { 
        this.apiUrl = environment.apiUrl;
}

uploadImage(newImageDTO: NewPictureDto) {
    return this.http.post(this.apiUrl+'recipepicture', newImageDTO);
}
}