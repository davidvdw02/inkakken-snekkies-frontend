import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from './recipe.service';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';
import { forkJoin, tap } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
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
        if(this.recipe.duration !== undefined && this.recipe.duration !== null){
          this.elapsedTime = this.recipe.duration;
          this.updateTimerDisplay();
        }
        if(this.recipe.deviatedIngredients !== undefined && this.recipe.deviatedIngredients !== null && this.recipe.deviatedIngredients.length > 0){
          this.deviations = this.recipe.deviatedIngredients;
        }
      });
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
      this.recipeService
        .putRecipe(this.recipe)
        .subscribe();
    }
  }

  saveTime() {
    this.pauseTimer();
    this.recipe.duration = this.elapsedTime;
    this.recipeService.putRecipe(this.recipe).subscribe();
  }
  addDeviation() {
    this.deviations.push({
      product: '',
      amount: undefined,
      addedOrSubstracted: true,
    });
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

  onDeviationDelete(index: number) {
    this.deviations.splice(index, 1);
  }

  onDeviationChange(deviation: DeviatedIngredient, index: number) {
    this.deviations[index] = deviation;
  }

  next() {
    if (this.validateRecipe()) {
      this.recipeService.putRecipe(this.recipe).subscribe((recipe: Recipe) => {
        this.router.navigate(['/recipe/form/' + recipe.id]);

        if (this.deviations.length > 0) {
          forkJoin(
            this.deviations
              .filter((deviation) => deviation.id === undefined)
              .map((deviation) => this.recipeService.postDeviation(deviation))
          ).subscribe((deviationDataArray) => {
            this.recipe.deviatedIngredients = (
              this.recipe.deviatedIngredients || []
            ).concat(deviationDataArray);
            this.recipeService.putRecipe(this.recipe).subscribe();
          });
        }
      });
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
          !deviation.product ||
          !deviation.amount ||
          !deviation.addedOrSubstracted === undefined
        ) {
          this.error = `Deviated ingredient is missing required fields.`;
          return false;
        }
      }
    }
    this.error = '';

    return true;
  }
}
