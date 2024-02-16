import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent {
@Input() deviation: any;
@Output() deviationChange = new EventEmitter<any>();
@Output() onDeviationDelete =  new EventEmitter<void>();

submitChanges() {
  console.log(this.deviation);
  this.deviationChange.emit(this.deviation);
}

deleteDeviation(){
  this.onDeviationDelete.emit();
}
}
