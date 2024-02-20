import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineRecipeComponent } from './online-recipe.component';
import { FormsModule } from '@angular/forms';
import { OnlineRecipeService } from './online-recipe.service';



@NgModule({
  declarations: [OnlineRecipeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [OnlineRecipeService],
  exports: [OnlineRecipeComponent]
})
export class OnlineRecipeModule { }
