import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: '',
    pssword: ''
  };

  constructor() { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: HTTP POST
    }
  }

}
