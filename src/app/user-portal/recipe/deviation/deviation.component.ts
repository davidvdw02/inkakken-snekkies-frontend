import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnChanges {
  @Input() deviation: any;
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
      product: [this.deviation.product || '', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      amount: [this.deviation.amount || '', [Validators.required, Validators.pattern('[0-9]+')]],
      addedOrSubstracted: [this.deviation.addedOrSubstracted || false]
    });
  }

  submitChanges() {
    if (this.deviationForm.valid) {
      this.deviation = this.deviationForm.value;
      this.deviationChange.emit(this.deviation);
    }
  }

  deleteDeviation() {
    this.onDeviationDelete.emit();
  }
}
