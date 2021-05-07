import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { NavbarComponent } from './navbar/navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppServiceService } from './Shared/app-service.service';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EmploeesComponent } from './emploees/emploees.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmpsComponent } from './view-emps/view-emps.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    CreateComponent,
    LoginComponent,
    HomeComponent,
    EmploeesComponent,
    AddEmpComponent,
    ViewEmpsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
