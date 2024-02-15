import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineRecipeComponent } from './online-recipe.component';



@NgModule({
  declarations: [OnlineRecipeComponent],
  imports: [
    CommonModule
  ],
  exports: [OnlineRecipeComponent]
})
export class OnlineRecipeModule { }
