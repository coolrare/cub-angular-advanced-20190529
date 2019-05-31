import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: 'test@example.com',
    pssword: ''
  };

  constructor() { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';
  }

}
