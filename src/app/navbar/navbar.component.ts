import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _router:Router,private toastr:ToastrService) { 





  }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null||localStorage.getItem('token')==""){
      $("#logoutBtn").hide( )
      $("#registerNav").show()
      $("#empsNav").hide()
      $("#loginNav").show()
      console.log('yes')
    }else{
      console.log('no')
      $("#logoutBtn").show( )
      $("#empsNav").show()
      $("#registerNav").hide()
      $("#loginNav").hide()
 
   
    }
   
    $("#loginNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#loginSection").offset().top
      }, 500);
  });

       $("#registerNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#CreateSection").offset().top
      }, 500);
  });

  $("#empsNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#empsSection").offset().top
    }, 500);
});



  }
  logOut(){
  localStorage.removeItem('token')
  $("#logoutBtn").hide( )
  location.reload()
  this.toastr.info('logout successful',"logout")
  this._router.navigate(['/login'])

  }
  
}
