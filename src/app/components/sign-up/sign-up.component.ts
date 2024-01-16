
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
  
})
export class SignUpComponent implements OnInit {
  
  // minDate: Date | undefined;
  // maxDate: Date | undefined;

  labelPosition: 'before' | 'after' = 'after';


  constructor() { 
    //  // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    //  const currentYear = new Date().getFullYear();
    //  this.minDate = new Date(currentYear - 20, 0, 1);
    //  this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  
  }


}
