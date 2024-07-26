import { Component } from '@angular/core';
import { CommonnavComponent } from '../../app/commonnav/commonnav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonnavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
