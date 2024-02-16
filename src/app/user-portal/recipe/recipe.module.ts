import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from '../recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { DeviationComponent } from './deviation/deviation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const recipeRoutes: Routes = [
  {
    path: ':id', component: RecipeComponent,
  }
]

@NgModule({
  declarations: [
    RecipeComponent,
    DeviationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule { }
