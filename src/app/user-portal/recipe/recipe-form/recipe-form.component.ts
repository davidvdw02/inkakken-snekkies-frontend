import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeFormService } from './recipe-form.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  recipeForm!: FormGroup;
  recipe: Recipe = {};
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private recipeFormService: RecipeFormService) { }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params) => {
       this.recipeService.getRecipe(params['id']).subscribe((data: any) => {console.log(data)}); 
    });
    this.initForm();
  }


  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      grade: [this.recipe.grade || 0],
      recipePictures: this.formBuilder.array([this.createPicturesGroup()]),
    });
  }

  addMore(): void {
    const pictures = this.recipeForm.get('recipePictures') as FormArray;
    pictures.push(this.createPicturesGroup());
  }
  
  getRecipePicturesControls(): AbstractControl[] {
    return (this.recipeForm.get('recipePictures') as FormArray).controls;
  }

  submitChanges() {
    for(let picture of this.recipeForm.value.recipePictures) {
    this.recipeFormService.postAndTurnPictureToBase64(picture)
  }
}
  createPicturesGroup(): FormGroup {
    return new FormGroup({
      'picture': new FormControl(''),
    })
  }
}
