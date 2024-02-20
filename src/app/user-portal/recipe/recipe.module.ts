import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from '../recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { DeviationComponent } from './deviation/deviation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
const recipeRoutes: Routes = [
  {
    path: 'id/:id', component: RecipeComponent,
  },
  {
    path: 'form/:id', component: RecipeFormComponent,
  }
]

@NgModule({
  declarations: [
    RecipeComponent,
    DeviationComponent,
    RecipeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    
  ]
})
export class RecipeModule { }
