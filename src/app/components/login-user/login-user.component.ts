import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'edu-login-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient);

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loginUser() {
    this.http
      .post('http://localhost:5500/login', this.loginForm.value) //requires "testEmail@abc.com" & encrypted password for Test@123
      .subscribe((data: any) => {
        console.log(data);
        window.sessionStorage.setItem('auth-token', data.accessToken); //sets auth-token data in browser session
        window.sessionStorage.setItem('admin', data.user.admin); //sets auth-token data in browser session
      });
  }

}
