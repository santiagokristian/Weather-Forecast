import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'weather-login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {

  constructor(public auth: AuthService) {  }

  loginRedirect(){
    this.auth.loginWithRedirect({
      appState:  { target: '/home' }
    })
  }
}
