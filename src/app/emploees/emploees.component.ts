import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../Shared/app-service.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
@Component({
  selector: 'app-emploees',
  templateUrl: './emploees.component.html',
  styleUrls: ['./emploees.component.css']
})
export class EmploeesComponent implements OnInit {
  empLists
  DeletedItem
  ModifiedItem
  getemps() {
   this.service.getEmp().subscribe((res)=>{
     this.empLists= res
     console.log(res)
     console.log( this.empLists)
    },(err)=>{
      console.log(err)
    })
}
  constructor(public service:AppServiceService,public toster:ToastrService) { 
    this.getemps()
    
  }

  ngOnInit(): void {
  

  }
   SeletetDeletedItem(item) {
    this.DeletedItem=item
    console.log(item)
   } 
   SeletetModifiedItem(item){
this.ModifiedItem=item
console.log(item)
   }
   ConfirmDeleteing(){
     
    if(this.DeletedItem!=null){
      this.service.deleteEmp(this.DeletedItem).subscribe((res)=>{
        this.getemps()

        this.toster.success('Employee Deleted Successfully', 'Delete Employee');
       
      },(err)=>{ this.toster.error('Failed to Delete Employee', 'Delete Employee');})
    }

   }
   ConfirmModiy(){
     console.log("r")
     this.service.ModifyEmp(this.ModifiedItem).subscribe(
       (res)=>{this.getemps()
        this.toster.success("Employee Modifyied successfully","Modify Employee")
        ,
    (err)=>{
      this.toster.error("Employee Modify failed","Modify Employee")

      console.log(err)}
    })
   }
   textSearch
   onKey(event){
    if (event == "" || event == null) 
    {
      this.getemps()
    } 
    else
     {
      console.log(event)
      this.service.searchForEmpByName(event).subscribe(
        (data) => {
          this.empLists=data
        },
        (error) => {
          console.log(error);
        }
      );
    }
   }
   BirthdaySearch
   onKeyBirthday(event){
    if (event == "" || event == null) 
    {
      this.getemps()
    } 
    else
     {
      console.log(event)
      this.service.searchForEmpByBirthday(event).subscribe(
        (data) => {
          this.empLists=data
          console.log(this.empLists)
        },
        (error) => {
          console.log(error);
        }
      );
    }
   }
   salarySearch
   onKeySalary(event){
     console.log(this.BirthdaySearch)
    this.BirthdaySearch
    this.textSearch=''
    if (event == "" || event == null) 
    {
      this.getemps()
    } 
    else
     {
      console.log(event)
      this.service.searchForEmpBySalary(event).subscribe(
        (data) => {
          this.empLists=data
          console.log(this.empLists)
        },
        (error) => {
          console.log(error);
        }
      );
    }
   }
   onKeyHiring(event){

   if (event == "" || event == null) 
   {
     this.getemps()
   } 
   else
    {
     console.log('event')
     this.service.searchForEmpByHiringData(event).subscribe(
       (data) => {
         this.empLists=data
         console.log(this.empLists)
       },
       (error) => {
         console.log(error);
       }
     );
   }
  }
}



