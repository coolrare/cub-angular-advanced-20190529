import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      username: ['123', [Validators.required, Validators.minLength(3)]],
      password: ['321', [Validators.required, Validators.minLength(3)]],
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(3)]),
        this.fb.control('', [Validators.required, Validators.minLength(3)]),
        this.fb.control('', [Validators.required, Validators.minLength(3)]),
        this.fb.control('', [Validators.required, Validators.minLength(3)])
      ])
    });
  }

}
