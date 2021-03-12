import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/SmsServices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   userName!:any;
  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName");
  }
  logout(){
    if (confirm("Do you want Logout ?")) {
      this.userService.logout().subscribe(data =>{

       
      })
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('roles');
      this.router.navigateByUrl("/login");
    } else {
    
    }
  }
}
