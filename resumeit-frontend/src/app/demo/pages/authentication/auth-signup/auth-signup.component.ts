import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; // Adjust path if needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export default class AuthSignupComponent {
  signupForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['JOB_SEEKER', Validators.required]
    });
  }

  onSignup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log('Payload:', this.signupForm.value);

    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {
        this.router.navigate(['/signin']);
      },
      error: (err) => {
        console.error('Signup failed', err);
        this.errorMessage = err.error?.message || 'Signup failed. Please try again.';
      }
    });
  }
  signUpWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
  
}
