import { Injectable } from '@angular/core';
import {HttpClient } from'@angular/common/http';

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private url = "http://localhost:9092/teacher/";
        
  constructor(private http:HttpClient) { }

  getAllTeachers(){
    return this.http.get(this.url+"getallteachers");
  }
  saveTeacher(teacher:any){
    return this.http.post(this.url+"saveteacher",teacher);
  }
  createTeacher(teacher:any) {
    return this.http.post(this.url+"saveteacher",teacher).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
}
