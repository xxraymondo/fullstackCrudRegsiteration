import { AuthinticationGuard } from './authintication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { CreateComponent } from './create/create.component';
import { EmploeesComponent } from './emploees/emploees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:CreateComponent},
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmploeesComponent,canActivate:[AuthinticationGuard]},
  {path:'AddEmp',component:AddEmpComponent,canActivate:[AuthinticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
