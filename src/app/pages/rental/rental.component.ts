import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonnavComponent } from '../../app/commonnav/commonnav.component';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonnavComponent],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  public hardware={
    name: "",
    rentalPerDay: "",
    finePerDay: "",
    availability:""
  }
  constructor(private http:HttpClient){}

  savehardware(){
    this.http.post("http://localhost:8080/hardware/save-hardware",this.hardware).subscribe(
      (res)=>{
        Swal.fire({
          title: "Rental Successfully!",
          text: "You clicked the button!",
          icon: "success",
    preConfirm:()=>{
      window.location.reload()
    }
        });
      }
    )
      }
}
