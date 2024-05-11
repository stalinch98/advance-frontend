import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PicoPlacaFormComponent } from './pico-placa-form/pico-placa-form.component';
import { RouterOutlet } from '@angular/router';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, VehicleFormComponent, PicoPlacaFormComponent, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advance-frontend';
}
