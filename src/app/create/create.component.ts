import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import {AppServiceService}from '../Shared/app-service.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public service:AppServiceService,private fb:FormBuilder,public toastr:ToastrService) {
    
   }
  ngOnInit(): void {
  }
  onSubmit(){
   
    this.service.addUser().subscribe(
      (res)=>{
           this.toastr.success("User has been created successfully","Create User")

          this.service.formModel.reset()
        }
        
        
      ,
      (err)=>{
        console.log(err)
        this.toastr.error("Failed to create user","Create User");
      }

    )
  }
 
}
