import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map, of } from 'rxjs';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnChanges {
  @Input() deviation: DeviatedIngredient | undefined;
  @Input() ingredients: Ingredient[] | undefined;
  @Output() deviationChange = new EventEmitter<any>();
  @Output() onDeviationDelete = new EventEmitter<void>();
  deviationForm!: FormGroup;
  ingredientOptions: string[] = [];
  filteredIngrediontOptions: String[] = [];

  

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['deviation'] && this.deviation) {
      this.initializeForm();
    }
    if (changes['ingredients'] && this.ingredients) {
      this.ingredientOptions = this.ingredients
        .filter(ingredient => ingredient.name !== undefined)
        .map(ingredient => ingredient.name || ''); 
    }
  }

  initializeForm(): void {
    this.deviationForm = this.formBuilder.group({
      ingredient: [this.deviation!.ingredient.name || '', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      amount: [this.deviation!.amount || '', [Validators.required, Validators.pattern('[0-9]+')]],
      addedOrSubstracted: [this.deviation!.addedOrSubstracted || false],
      accident: [this.deviation!.accident || false]
    });
  }
  run = 0;
  filterIngredientOptions(event: any) {
     const filterValue = event.target.value.toLowerCase();
    this.filteredIngrediontOptions = this.ingredientOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  submitChanges() {
    if (this.deviationForm.valid) {
      if (this.deviation) {
        this.deviation.addedOrSubstracted = this.deviationForm.value.addedOrSubstracted;
        this.deviation.amount = this.deviationForm.value.amount;
        this.deviation.ingredient.name = this.deviationForm.value.ingredient;
        this.deviation.accident = this.deviationForm.value.accident;
        this.deviationChange.emit(this.deviation);
      }
    }
  }

  deleteDeviation() {
    this.onDeviationDelete.emit();
  }
}
