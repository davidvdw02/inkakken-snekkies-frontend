import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviatedIngredient } from 'src/app/models/deviated-ingredient.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnChanges {
  @Input() deviation: DeviatedIngredient | undefined;
  @Output() deviationChange = new EventEmitter<any>();
  @Output() onDeviationDelete = new EventEmitter<void>();
  deviationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['deviation'] && this.deviation) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.deviationForm = this.formBuilder.group({
      ingredient: [this.deviation!.ingredient.name || '', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      amount: [this.deviation!.amount || '', [Validators.required, Validators.pattern('[0-9]+')]],
      addedOrSubstracted: [this.deviation!.addedOrSubstracted || false]
    });
  }

  submitChanges() {
    if (this.deviationForm.valid) {
      if (this.deviation) {
        this.deviation.addedOrSubstracted = this.deviationForm.value.addedOrSubstracted;
        this.deviation.amount = this.deviationForm.value.amount;
        this.deviation.ingredient.name = this.deviationForm.value.ingredient;
        this.deviationChange.emit(this.deviation);
      }
    }
  }

  deleteDeviation() {
    this.onDeviationDelete.emit();
  }
}
