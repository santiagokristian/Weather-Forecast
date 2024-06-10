import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientBase } from './http-client-base.config';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[HttpClientBase]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
