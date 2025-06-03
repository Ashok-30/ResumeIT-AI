import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuth2RedirectHandlerComponent } from './demo/pages/oauth2-redirect-handler/oauth2-redirect-handler.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./demo/pages/authentication/auth-signup/auth-signup.component').then(m => m.default)
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./demo/pages/authentication/auth-signin/auth-signin.component').then(m => m.default)
  },
  {
    path: 'oauth2/redirect',
    component: OAuth2RedirectHandlerComponent
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./demo/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: 'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
