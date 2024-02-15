import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from './recipe.service';

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
      this.recipeService.postRecipe(this.recipe).subscribe((data) => {this.recipe = data; console.log(this.recipe)});
    }
  }

  saveTime() {
    this.pauseTimer();
    this.recipe.duration = this.elapsedTime;
    this.recipeService.postRecipe(this.recipe).subscribe((data) => {this.recipe = data; console.log(this.recipe)});
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
}
