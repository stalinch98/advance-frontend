import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pico-placa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pico-placa-form.component.html',
  styleUrl: './pico-placa-form.component.css'
})
export class PicoPlacaFormComponent {
  onSubmit() {
    console.log('El botón Consultar fue presionado');
  }
}
