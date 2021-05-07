import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from '../Shared/app-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
 empLists
   getemps() {
    this.service.getEmp().subscribe((res)=>{
      this.empLists= res
      console.log(res)
      console.log( this.empLists)
     },(err)=>{
       console.log(err)
     })
 }
  constructor( public service:AppServiceService,public toster:ToastrService) { 
    this.getemps()
    
    // this.service.getEmp().subscribe((res)=>{
    //  this.empLists= res
    //  console.log(res)
    //  console.log( this.empLists)
    // },(err)=>{
    //   console.log(err)
    // })
  }

  ngOnInit(): void {
  }
  onSubmit(){
     this.service.addEmp().subscribe((res)=>{
       console.log(res)
        this.getemps()
        this.service.EmpModel.reset()
        this.toster.success("employee has been added successfully","success")
     },(err)=>{
      this.toster.error("failed to add the employee","failed")
       console.log(err)
     })
  }

}
