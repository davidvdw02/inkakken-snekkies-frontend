import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  deviatons: DeviatedIngredient[] = [];
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipe.onlineRecipeId = params['id'];
    });
  }

  resetTimer() {
    this.elapsedTime = 0;
    this.updateTimerDisplay();
    this.pauseTimer();
  }

  startTimer() {
    if (!this.timerRunning) {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.updateTimerDisplay();
      }, 1000);
      this.timerRunning = true;
      this.recipe.startTime = new Date();
      this.recipeService.postRecipe(this.recipe).subscribe((data: any) => {this.recipe.id = data.id;});
    }
  }

  saveTime() {
    this.pauseTimer();
    this.recipe.duration = this.elapsedTime;
    this.recipeService.postRecipe(this.recipe).subscribe();
  }
  addDeviation() {
    this.deviatons.push({product: '', amount: undefined, addedOrSubstracted: true});
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
      this.deviatons.splice(index, 1);
  }

  onDeviationChange(deviation: DeviatedIngredient, index: number) {
    this.deviatons[index] = deviation;
    console.log(this.deviatons)
  }

  next() {
    if(this.validateRecipe()){
      forkJoin(
        this.deviatons
          .filter(deviation => deviation.id === undefined)
          .map(deviation => this.recipeService.postDeviation(deviation))
      )
      .pipe(
        tap(deviationDataArray => {
          this.recipe.deviatedIngredients = (this.recipe.deviatedIngredients || []).concat(deviationDataArray);
          this.recipeService.postRecipe(this.recipe).subscribe();
        })
      )
      .subscribe();
    }
    }
    
    validateRecipe(): boolean {
      if (!this.recipe.startTime || !this.recipe.duration) {
        console.error("Start time and duration are required.");
        return false;
      }
      
      if (this.deviatons) {
        for (let i = 0; i < this.deviatons.length; i++) {
          const deviation = this.deviatons[i];
          console.log(deviation);
          if (!deviation.product || !deviation.amount || !deviation.addedOrSubstracted === undefined) {
            console.error(`Deviated ingredient at index ${i} is missing required fields.`);
            return false;
          }
        }
      }
      
      return true;
    }
}
