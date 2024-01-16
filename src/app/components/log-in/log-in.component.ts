import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(){
    if(this.email.hasError('required')) {
      return ;

    }
    return this.email.hasError('error') ? 'Not a valid email' : '';
  }

  // hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm): void {
    
  }

}
