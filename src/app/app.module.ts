import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/Smscomponents/login/login.component';
import { RegisterComponent } from 'src/Smscomponents/register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from 'src/Smscomponents/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from 'src/Smscomponents/dashboard/dashboard.component';
import { SearchComponent } from 'src/Smscomponents/search/search.component';
import { StaffComponent } from 'src/Smscomponents/staff/staff.component';
import { StudentComponent } from 'src/Smscomponents/student/student.component';
import { AddstudentComponent } from 'src/Smscomponents/addstudent/addstudent.component';
import { AddstaffComponent } from 'src/Smscomponents/addstaff/addstaff.component';
import { UsersComponent } from 'src/Smscomponents/users/users.component';
import { AddusersComponent } from 'src/Smscomponents/addusers/addusers.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SmsInterceptor } from 'src/sms-interceptors/sms.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    SearchComponent,
    StaffComponent,
    StudentComponent,
    AddstudentComponent,
    AddstaffComponent,
    UsersComponent,
    AddusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:SmsInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
