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
       this.recipeService.getRecipe(params['id']).subscribe((data: any) => {this.recipe = data;
        this.initForm();
      }); 
      this.initForm();
    });
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
  removeLast(): void {
    const pictures = this.recipeForm.get('recipePictures') as FormArray;
    pictures.removeAt(pictures.length - 1);
  }
  
  getRecipePicturesControls(): AbstractControl[] {
    return (this.recipeForm.get('recipePictures') as FormArray).controls;
  }

  submitChanges() {
    this.recipeFormService.putRecipeWithPictures(this.recipe, this.recipeForm.value.recipePictures);
}

  createPicturesGroup(): FormGroup {
    return new FormGroup({
      'picture': new FormControl(''),
    })
  }
}
