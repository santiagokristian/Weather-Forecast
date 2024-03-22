import { Injectable } from '@angular/core';
import { HttpClientBase } from './http-client-base.config';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = environment.weatherApi.url;
  weatherAppId = environment.weatherApi.appId;
  constructor(private httpClientBase: HttpClientBase) { }

  getWeatherForecast(location: string) {
    return this.httpClientBase.getBase(`${this.weatherUrl}?q=${location}&cnt=16&units=imperial&appid=${this.weatherAppId}`, false);

  }
}
