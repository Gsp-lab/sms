import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StaffService } from 'src/SmsServices/staff.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private formBulider:FormBuilder,
    private staffSerivce:StaffService) { }
  addstaffForm!: FormGroup;

  ngOnInit(): void {
    this.addstaffForm = this.formBulider.group({
      staffName :[''],
      dob  :[''],
      subjects:[''],
      phoneNo:[''],
      email :[''],
      address : [''],
      gender : ['']
    })
  }
  savestaff(){
   this.staffSerivce.createTeacher(this.addstaffForm.value).subscribe(
     (data:any) => {
       console.log(data);
     }
   )
  }

}
