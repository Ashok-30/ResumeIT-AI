import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth2-redirect-handler',
  standalone: true,
  template: `<p>Redirecting...</p>`
})
export class OAuth2RedirectHandlerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const userType = queryParams.get('userType');

    if (token) {
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userType', userType ?? '');
      this.router.navigate(['/dashboard']); 
    } else {
      this.router.navigate(['/signup']); 
    }
  }
}
