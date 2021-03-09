import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchValue = null;
  staffFlag = false;
  studentFlag = false;
  ngOnInit(): void {
  }
  searchEvent(event:any){
     this.searchValue = event.target.value;
     if("staff" == this.searchValue){
      this.studentFlag = false;
       this.staffFlag = true;
     }
     if("student" == this.searchValue){
       this.staffFlag = false;
       this.studentFlag = true;
     }
     
  }

}
