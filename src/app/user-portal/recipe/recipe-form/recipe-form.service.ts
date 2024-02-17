import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeFormService {
    constructor(private http: HttpClient) { 
}

    postAndTurnPictureToBase64(picture:any){
        const base64Picture = this.turnTo64(picture)
        this.postPicture(picture)
    }
    private postPicture(picture: string) {
        console.log(picture)
    this.http.post('http://localhost:8080/recipepicture', {picture: picture}).subscribe(data => console.log(data));
    }

    private turnTo64(picture: any):string {
        const reader = new FileReader();
        reader.onloadend = () => {
            return reader.result as string;
        }
        return '';
    }
}