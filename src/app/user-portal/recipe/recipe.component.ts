import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from './recipe.service';
import { forkJoin } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  Ingredients: Ingredient[] = [];
  startTime: number = 0;
  elapsedTime: number = 0;
  timerInterval: any;
  timerRunning: boolean = false;

  recipe: Recipe = {};
  deviations: DeviatedIngredient[] = [];
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  error: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipeService.getRecipe(params['id']).subscribe((data) => {
        this.recipe = data as Recipe;
        if (
          this.recipe.duration !== undefined &&
          this.recipe.duration !== null
        ) {
          this.elapsedTime = this.recipe.duration;
          this.updateTimerDisplay();
        }
        if (
          this.recipe.deviatedIngredients !== undefined &&
          this.recipe.deviatedIngredients !== null &&
          this.recipe.deviatedIngredients.length > 0
        ) {
          this.deviations = this.recipe.deviatedIngredients;
        }
      });
    });
    this.recipeService.getIngredients().subscribe((data) => {
      this.Ingredients = data as Ingredient[];
    });
  }

  resetTimer() {
    this.elapsedTime = 0;
    this.updateTimerDisplay();
    this.pauseTimer();
  }

  startTimer() {
    if (!this.timerRunning && this.elapsedTime === 0) {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.updateTimerDisplay();
      }, 1000);
      this.timerRunning = true;
      this.recipe.startTime = new Date();
      this.recipeService.putRecipe(this.recipe).subscribe();
    }
  }

  saveTime() {
    this.pauseTimer();
    this.recipe.duration = this.elapsedTime;
    this.recipeService.putRecipe(this.recipe).subscribe();
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.timerRunning = false;
  }

  updateTimerDisplay() {
    this.seconds = Math.floor((this.elapsedTime / 1000) % 60);
    this.minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
    this.hours = Math.floor(this.elapsedTime / (1000 * 60 * 60));
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  onDeviationChange(deviation: DeviatedIngredient, index: number) {
    if (deviation.id !== undefined) {
      this.recipeService
        .postIngredient(deviation.ingredient)
        .subscribe((data) => {
          this.deviations[index].ingredient = data as Ingredient;
          this.recipeService
            .postDeviation(deviation)
            .subscribe(
              (data) => (this.deviations[index] = data as DeviatedIngredient)
            );
        });
    } else {
      this.deviations[index] = deviation;
    }
  }

  postIngredientsAndDeviations() {
    const ingredientObservables = [];

    for (let i = 0; i < this.deviations.length; i++) {
      if (
        (this.deviations[i].ingredient.id === undefined)
      ) {
        const ingredientObservable = this.recipeService.postIngredient(
          this.deviations[i].ingredient
        );
        ingredientObservables.push(ingredientObservable);
      }
    }
    if(ingredientObservables.length === 0) {
      this.router.navigate(['/recipe/form/' + this.recipe.id]);
    }

    forkJoin(ingredientObservables).subscribe((ingredients: any[]) => {
      this.deviations.map(
        (deviation) =>
          (deviation.ingredient = ingredients.find(
            (ingredient) => ingredient.name === deviation.ingredient.name
          ))
      );
      this.postDeviations();
    });
  }

  postDeviations() {
    const deviationObservables = [];

    for (let deviation of this.deviations) {
      if (deviation.id === undefined) {
        const deviationObservable = this.recipeService.postDeviation(deviation);
        deviationObservables.push(deviationObservable);
      }
    }

    forkJoin(deviationObservables).subscribe((deviations: any[]) => {
      this.deviations.forEach((deviation, index) => {
        if (deviation.id === undefined) {
          const updatedDeviation = deviations.find(
            (newDeviation) =>
              newDeviation.ingredient.name === deviation.ingredient.name
          );
          if (updatedDeviation) {
            this.recipe.deviatedIngredients![index] = updatedDeviation;
          }
        }
      });
      this.postRecipe();
    });
  }
  postRecipe() {
    this.recipeService.putRecipe(this.recipe).subscribe((data) => {
      this.router.navigate(['/recipe/form/' + this.recipe.id]);
    });
  }

  async next() {
    if (this.validateRecipe()) {
      this.postIngredientsAndDeviations();
    }
  }

  validateRecipe(): boolean {
    if (!this.recipe.startTime || !this.recipe.duration) {
      this.error = 'Start time and duration are required.';
      return false;
    }
    this.error = '';

    if (this.deviations) {
      for (let i = 0; i < this.deviations.length; i++) {
        const deviation = this.deviations[i];
        if (
          !deviation.ingredient ||
          deviation.amount === undefined ||
          deviation.amount < 0 || 
          deviation.addedOrSubstracted === undefined
        ) {
          this.error = `Deviated ingredient is missing required fields.`;
          return false;
        }
      }
    }
    this.error = '';

    return true;
  }

  // Method to add a new deviation
  addDeviation() {
    this.deviations.push({
      ingredient: {},
      amount: undefined,
      addedOrSubstracted: false,
      accident: false,
    });
  }
}
