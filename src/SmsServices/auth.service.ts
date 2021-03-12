import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginInUser(){
   if(localStorage.getItem('token')){
     return true
   }else{
     return false;
   }
  }
  getToken(){
    if(localStorage.getItem('token') == null){
      return "";
    }else{
     return localStorage.getItem('token');
    }
  }
}
