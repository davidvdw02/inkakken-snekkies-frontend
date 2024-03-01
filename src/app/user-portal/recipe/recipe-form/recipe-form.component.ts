import { ChangeDetectorRef, Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeFormService } from './recipe-form.service';
import { NewPictureDto } from 'src/app/models/new.picture.dto.model';
import { RecipePicture } from 'src/app/models/recipe_picture.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  apiUrl: string;
  recipeForm!: FormGroup;
  recipe: Recipe = {};

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private recipeFormService: RecipeFormService,
              private router: Router) {
                this.apiUrl = environment.apiUrl;
              }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.recipeService.getRecipe(params['id']).subscribe((data: any) => {
        this.recipe = data;
        this.initForm();
      });
    });
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      grade: [this.recipe.grade || 0],
      recipePictures: this.formBuilder.array([this.createPicturesGroup()]),
    });
  }


  getRecipePicturesControls(): AbstractControl[] {
    return (this.recipeForm.get('recipePictures') as FormArray).controls;
  }

    addImageOnce(data: any) {
    setTimeout(() => {
      this.recipe.recipePictures?.push(data);
    }, 1000);
  }

  createPicturesGroup(): FormGroup {
    return this.formBuilder.group({
      'picture': ['']
    });
  }

  onGradeChange(event: any) {
    this.recipe.grade = event.target.value;
    this.recipeService.putRecipe(this.recipe).subscribe();
  }
  onPictureSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data: string = reader.result as string;
      const newImageDTO: NewPictureDto = {
        recipeId: this.recipe.id ?? '',
        picture: base64Data
      }
      this.recipeFormService.uploadImage(newImageDTO).subscribe(
        (data: RecipePicture) => {
          this.addImageOnce(data)
        }
      );
    };
    reader.readAsDataURL(file);
  }

  navigateNext() {
      this.router.navigateByUrl('/onlineentertainment/id/' + this.recipe.movieNightId);
  }
}

