import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from 'src/Smscomponents/addstaff/addstaff.component';
import { AddstudentComponent } from 'src/Smscomponents/addstudent/addstudent.component';
import { DashboardComponent } from 'src/Smscomponents/dashboard/dashboard.component';
import { LoginComponent } from 'src/Smscomponents/login/login.component';
import { NavbarComponent } from 'src/Smscomponents/navbar/navbar.component';
import { RegisterComponent } from 'src/Smscomponents/register/register.component';
import { SearchComponent } from 'src/Smscomponents/search/search.component';
import { StaffComponent } from 'src/Smscomponents/staff/staff.component';
import { StudentComponent } from 'src/Smscomponents/student/student.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent,pathMatch:'full'},
  
  {path:'sms',component:NavbarComponent},
  {path:'',component:NavbarComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'search',component:SearchComponent},
    {path:'staff',component:StaffComponent},
    {path:'student',component:StudentComponent},
    {path:'addstudent',component:AddstudentComponent},
    {path:'addstaff',component:AddstaffComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
