import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClientBase } from '../../services/http-client-base.config';
import { WeatherDisplayComponent } from './pages/weather-display/weather-display.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    WeatherDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, HttpClientBase]
})
export class HomeModule { }
