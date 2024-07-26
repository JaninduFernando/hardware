import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { RentalComponent } from './pages/rental/rental.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AddCustomerComponent,ViewAllComponent,RentalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hardware';
}
