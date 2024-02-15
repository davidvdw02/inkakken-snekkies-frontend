import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from '../recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';
const recipeRoutes: Routes = [
  {
    path: ':id', component: RecipeComponent,
  }
]

@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes),
  ]
})
export class RecipeModule { }
