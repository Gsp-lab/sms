import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private formBulider:FormBuilder) { }
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
   console.log(this.addstaffForm.value);
  }

}
