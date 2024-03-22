import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'weather-login',
  standalone: true,
  imports: [LoginButtonComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
