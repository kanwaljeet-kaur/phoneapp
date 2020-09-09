import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {EmployeeComponent}from './components/employee/employee.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {NgclassdemoComponent} from './components/ngclassdemo/ngclassdemo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  { path: 'employee', component: EmployeeComponent },
  {path: 'employee-list', component:EmployeeListComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path: 'user',component:UserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'ngclassdemo',component:NgclassdemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
