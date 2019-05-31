import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: '',
    password: ''
  };

  isRememberMe = false;

  constructor() { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.data.username = localStorage.getItem('email');
    if (this.data.username) {
      this.isRememberMe = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: HTTP POST
      if (this.isRememberMe) {
        localStorage.setItem('email', form.value.username);
      } else {
        localStorage.removeItem('email');
      }

      localStorage.setItem('token', '123');
    }
  }

  changeStatus(ngmodel: NgModel) {
    if (ngmodel.status === 'DISABLED') {
      ngmodel.control.enable();
    } else {
      ngmodel.control.disable();
    }
  }

}
