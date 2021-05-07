import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import {AppServiceService}from '../Shared/app-service.service'
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginformModel={
    Username:'',
    Password:''
  }
  constructor(public service:AppServiceService,private fb:FormBuilder,
    private router:Router,private toastr:ToastrService) { }
   
  ngOnInit(): void {

   
  }
 
  onSubmit(form:NgForm){
    
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/home')
        this.toastr.success("login successed")
        location.reload(true);
      }
    ,(err)=>{
      this.toastr.error("login falied")    }
    )
  }

}
