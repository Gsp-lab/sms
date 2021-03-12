import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/SmsServices/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffService: StaffService) { }
  staffsList: any;
  ngOnInit(): void {
    this.getAllTeachers();
  }
  getAllTeachers(){
    this.staffService.getAllTeachers().subscribe(data => {
      console.log(data);
    })
  }
}
