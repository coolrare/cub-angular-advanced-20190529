import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  form: FormGroup;
  data: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(3)])
      ])
    });

    this.http.get<any>('http://www.mocky.io/v2/5cf11b77300000d16c00bcc3')
      .subscribe(data => {
        this.data = data;
        this.form.reset(data);
      });
  }

  addNewEmail() {
    const emails: FormArray = this.form.get('emails') as FormArray;
    emails.push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  resetForm() {
    this.form.reset(this.data);
  }

}
