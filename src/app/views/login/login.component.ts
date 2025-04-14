import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface AuthenticationDTO {
  login: string;
  password: string;
}

interface LoginResponseDTO {
  token: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value).subscribe(
        (response: LoginResponseDTO) => {
          sessionStorage.setItem('token', response.token);
          console.log('Token armazenado:', response.token); // Verifique se o token é armazenado
          this.router.navigate(['/app']);
        },
        (error) => {
          this.errorMessage = 'Login ou senha inválidos';
        }
      );
    }
  }

  login(data: AuthenticationDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>('http://localhost:8080/auth/login', data);
  }

}
