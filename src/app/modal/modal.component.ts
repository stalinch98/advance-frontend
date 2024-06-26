import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormValue } from '../interfaces/interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() validToDrive: boolean = false;
  @Input() dataVehicle: FormValue = {} as FormValue;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
