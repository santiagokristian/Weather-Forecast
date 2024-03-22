import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WeatherDisplayComponent } from './pages/weather-display/weather-display.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'display', component: WeatherDisplayComponent, }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
