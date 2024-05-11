import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface FormValue {
  plate: string;
  datetime: string;
}

@Component({
  selector: 'app-pico-placa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pico-placa-form.component.html',
  styleUrl: './pico-placa-form.component.css'
})
export class PicoPlacaFormComponent {

  constructor(private http: HttpClient) { }

  onSubmit(value: FormValue) {
    const params = { licensePlate: value.plate, currentDate: value.datetime };

    this.http.get(`${environment.apiUrl}/isValidToDrive`, { params }).subscribe(response => {
      console.log(response);
    });
  }
}
