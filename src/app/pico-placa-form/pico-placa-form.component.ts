import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ModalComponent } from '../modal/modal.component';
import { FormValue } from '../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { fechaHoraActualValidator } from '../validators/validator';

@Component({
  selector: 'app-pico-placa-form',
  standalone: true,
  imports: [FormsModule, ModalComponent, ReactiveFormsModule],
  templateUrl: './pico-placa-form.component.html',
  styleUrl: './pico-placa-form.component.css',
  providers: [DatePipe]
})
export class PicoPlacaFormComponent {

  showModal = false;
  validToDrive = false;
  dataVehicle!: FormValue;
  form: FormGroup;

  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder) {
    this.form = this.fb.group({
      datetime: ['', [Validators.required, fechaHoraActualValidator]],
      plate: ['', [Validators.required, Validators.pattern('[A-Za-z]{3}[0-9]{4}')]]
    });
  }

  onSubmit(value: FormValue) {
    const params = { licensePlate: value.plate, currentDate: value.datetime };
    this.dataVehicle = {
      plate: value.plate.toUpperCase(),
      datetime: this.datePipe.transform(value.datetime, 'dd/MM/yyyy HH:mm') || ''
    };

    this.http.get(`${environment.apiUrl}/isValidToDrive`, { params }).subscribe(response => {
      this.validToDrive = Boolean(response);
      this.showModal = true;
    }, error => {
      console.log(error);
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
