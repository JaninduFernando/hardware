import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {

  public hardware ={
    itemId: "",
    name:"",
    rentalPerDay:"",
    finePerDay:"",
    availability:""
  }

  public hardwareList:any

  constructor(private http:HttpClient){
    this.loadTable()
      }
    
      public loadTable(){
        this.http.get("http://localhost:8080/hardware/get-hardware").subscribe(
          (res)=>{
            this.hardwareList=res;
          }
        )
      }
    
      
    
      deletehardware(itemId:number){
        Swal.fire({
          title: "Warning!",
          text: "Are you sure want to delete?",
          icon: "warning",
          showConfirmButton:true,
          showCancelButton:true,
    
        }).then(res=>{
          if (res.isConfirmed) {
            this.http.delete(`http://localhost:8080/hardware/delete-hardware/${itemId}`).subscribe(
              res=>{
                Swal.fire({
                  title: "Deleted Successfully!",
                  text: "You clicked the button!",
                  icon: "success",
            preConfirm:()=>{
              window.location.reload()
            }
                });
              }
            )
          }
        });
      }
}

