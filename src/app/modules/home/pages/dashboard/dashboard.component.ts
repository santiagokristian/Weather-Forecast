import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../../../services/weather.service';
import { Subscription, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { parseWeatherTableData } from '../../../../model/weather-table.model';
import { WeatherAPI } from '../../../../model/weather-api.model';

@Component({
  selector: 'weather-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({ city: new FormControl('') });
  submitted: boolean = false;
  loading: boolean = false;
  weatherSubscription: Subscription = new Subscription;
  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      city: ['', [Validators.required, Validators.pattern(`^([a-zA-Z \\-']+)*$`)]]
    })
  }
  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid && this.loading === false) {
      const city = this.form.controls['city'].value;
      this.loading = true;
      this.weatherSubscription = this.weatherService.getWeatherForecast(city).
        pipe(catchError((error: HttpErrorResponse) => {
          this.loading = false;
          console.log(error);
          if (error.status === 404) {
            console.log('404 ERROR');
          }
          return ([]);
        })).subscribe((data) => {
          this.loading = false;
          const table=parseWeatherTableData(data as WeatherAPI);
          console.log(table)
        })
    }
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
