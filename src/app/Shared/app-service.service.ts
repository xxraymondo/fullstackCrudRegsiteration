import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private _HttpClient:HttpClient,private fb:FormBuilder) { }
  formModel=this.fb.group({
    Username:['',Validators.required],
    Email:['',Validators.email],
    Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      confirmPass:['',Validators.required]
    }
    ,{validator:this.checkPasswords})
    
  })

  LoginformModel=this.fb.group({
    Username:['',Validators.required],
    Password:['',Validators.required]
  })
  EmpModel=this.fb.group({
    Name:['',Validators.required],
    Salary:['',Validators.required],
    Birthday:['',Validators.required],
    HireDate:['',Validators.required]
  })
  EditEmpModel=this.fb.group({
    Name:['',Validators.required],
    Salary:['',Validators.required],
    Birthday:['',Validators.required],
    HireDate:['',Validators.required]
  })


  checkPasswords(fb: FormGroup) { // here we have the 'passwords' group
    let confirmPass = fb.get('confirmPass');
  
    if(confirmPass.errors==null || 'passwordMismatch' in confirmPass.errors)
    {
      if(fb.get('Password').value != confirmPass.value){
        confirmPass.setErrors({ passwordMismatch:true })
      }else{
        confirmPass.setErrors(null)
      }
    } 
 }
 
  readonly baseURL ='https://localhost:44321/api/'

  addUser(){
    var user={
    Username:this.formModel.value.Username,
    Email:this.formModel.value.Email,
    Password:this.formModel.value.Passwords.Password

    } 
    return this._HttpClient.post(this.baseURL+"ApplicationUser/Register",user)
   }
   login(formData){
     return this._HttpClient.post(this.baseURL+"ApplicationUser/loginUser",formData)
   }
   getEmp(){
     return this._HttpClient.get(this.baseURL+"Employees")
   }
   addEmp(){
    var Emp={
      Name:this.EmpModel.value.Name,
      Salary:this.EmpModel.value.Salary,
      Birthday:this.EmpModel.value.Birthday,
      HireDate:this.EmpModel.value.HireDate
  
      } 
     return this._HttpClient.post(this.baseURL+"Employees",Emp)
   }
   deleteEmp(id){
     return this._HttpClient.delete(this.baseURL+"Employees/"+id)
   }
   ModifyEmp(id){
    var Emp={
      Name:this.EditEmpModel.value.Name,
      Salary:this.EditEmpModel.value.Salary,
      Birthday:this.EditEmpModel.value.Birthday,
      HireDate:this.EditEmpModel.value.HireDate
  
      } 
      console.log(Emp)
    return this._HttpClient.put(this.baseURL+"Employees/"+id,Emp)
  }
  searchForEmpByName(Employee){
    return this._HttpClient.get<any>(this.baseURL+"Employees/SearchEmployee/"+Employee, Employee).pipe()

  }
  searchForEmpByBirthday(birthday){
    return this._HttpClient.get<any>(this.baseURL+"Employees/SearchEmployeeByBirthday/"+birthday, birthday).pipe()

  }
  searchForEmpBySalary(salary){
    return this._HttpClient.get<any>(this.baseURL+"Employees/SearchEmployeeBySalary/"+salary, salary).pipe()

  }
  searchForEmpByHiringData(hiringDate){
    return this._HttpClient.get<any>(this.baseURL+"Employees/SearchEmployeeByHiringDate/"+hiringDate, hiringDate).pipe()
  }
}
