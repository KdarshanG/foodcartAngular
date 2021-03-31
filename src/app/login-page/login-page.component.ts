import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  emailErrorMessage:string;
  passwordErrorMessage:string;
  isMobile = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initiailizeForm();
  }

  initiailizeForm(){
    this.form = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

 

  
  signUpLoader(){
    this.router.navigate(['/']);
  }

  forgotPassword(){
    this.router.navigate(['/']);
  }

  onLogin(){
    
  } 
}
