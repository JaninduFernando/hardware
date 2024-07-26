import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commonnav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './commonnav.component.html',
  styleUrl: './commonnav.component.css'
})
export class CommonnavComponent {

}
