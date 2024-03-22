import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { WeatherTable } from '../../../../model/weather-table.model';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss'
})
export class WeatherDisplayComponent implements AfterViewInit, OnDestroy {
  weather$: Observable<any>;
  weatherSubscription: Subscription;
  weatherData: WeatherTable;
  constructor(
    private store: Store<{ weather: any }>,
    private router: Router) {
    this.weather$ = this.store.select('weather');
    this.weatherSubscription = this.weather$.subscribe((data) => {
      this.weatherData = data.table as WeatherTable;
    })
  }

  ngAfterViewInit() {
    console.log(this.weatherData)
    if (this.weatherData.city === '') {
      this.router.navigate(['home']);
    }
  }
  ngOnDestroy() {
    this.weatherSubscription.unsubscribe();
  }

  goBack() {
    this.router.navigate(['home']);
  }
}
