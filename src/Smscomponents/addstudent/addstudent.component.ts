import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private formBulider:FormBuilder) { }
    addstudentForm! : FormGroup;
  ngOnInit(): void {
    this.addstudentForm = this.formBulider.group({
      studentName :[''],
      dob : [''],
      fatherName : [''],
      phoneNo : [''],
      email : [''],
      gender : [''],
      address : [''],
      telugu : [''],
      english :[''],
      hindi :[''],
      maths : [''],
      physcialScience : [''],
      naturalScience :[''],
      social : ['']

    })
  }
  savestudent(){
      console.log(this.addstudentForm.value);
  }
  addMarks(){
    alert("hi");
  }
}
