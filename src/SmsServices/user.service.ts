import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:9090/user/";
  constructor(private http: HttpClient) { }

 
  login(user:any) {
    return this.http.post(this.url+"loginuser",user).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
  registerUser(user:any){
   return this.http.post(this.url+"saveuser",user);
  }
  logout(){
    return this.http.get(this.url+"logout")
  }
}
