import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../../home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../../../../services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../../../store/app.reducer';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { WeatherAPIMock } from '../../../../../assets/test/ApiReturn';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherService: WeatherService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        CommonModule,
        HomeRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        AsyncPipe,
        HttpClientTestingModule, StoreModule.forRoot(appReducer)
      ],
    })
      .compileComponents();
    weatherService = TestBed.inject(WeatherService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not accept invalid characters and form is invalid', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    const button = fixture.nativeElement.querySelector('#search-btn');
    el.value = '12345';
    el.dispatchEvent(new Event('input'));
    button.click();
    expect(fixture.componentInstance.form.controls['city'].invalid).toBeTrue();
    expect(fixture.componentInstance.form.invalid).toBeTrue();
  });
  it('should accept valid characters and form is valid', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    const button = fixture.nativeElement.querySelector('#search-btn');
    el.value = 'canada';
    el.dispatchEvent(new Event('input'));
    button.click();
    expect(fixture.componentInstance.form.controls['city'].valid).toBeTrue();
    expect(fixture.componentInstance.form.valid).toBeTrue();
  });
  it('should simulate service call and service throws an error', async () => {
    const input = fixture.debugElement.query(By.css('input'));
    spyOn(weatherService, 'getWeatherForecast').and.returnValue(throwError({ status: 404 }))
    const el = input.nativeElement;
    const button = fixture.nativeElement.querySelector('#search-btn');
    el.value = 'canada';
    el.dispatchEvent(new Event('input'));
    button.click();
    expect(fixture.componentInstance.searchResults).toBeFalse();
  });
  it('should simulate service call and success', async () => {
    const input = fixture.debugElement.query(By.css('input'));
    spyOn(weatherService, 'getWeatherForecast').and.returnValue(of(WeatherAPIMock));
    const el = input.nativeElement;
    const button = fixture.nativeElement.querySelector('#search-btn');
    el.value = 'london';
    el.dispatchEvent(new Event('input'));
    button.click();
    expect(fixture.componentInstance.searchResults).toBeTrue();
  });
  it('should simulate clicking display weather', async () => {
    const input = fixture.debugElement.query(By.css('input'));
    spyOn(weatherService, 'getWeatherForecast').and.returnValue(of(WeatherAPIMock));
    const el = input.nativeElement;
    const button = fixture.nativeElement.querySelector('#search-btn');
    el.value = 'london';
    console.log(button);
    el.dispatchEvent(new Event('input'));
    button.click();
    console.log(fixture.componentInstance.searchResults);
    fixture.whenStable().then(() => {
      console.log(fixture.componentInstance.searchResults);
      const button2 = fixture.nativeElement.querySelector('#display-btn');
      console.log(fixture.nativeElement);
      button2.click();
      expect(fixture.componentInstance.searchResults).toBeTrue();
    });
  });

  it('should reset the form', async () => {
    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    el.value = 'london';
    el.dispatchEvent(new Event('input'));
    fixture.componentInstance.onReset();
    expect(fixture.componentInstance.form.controls['city'].value).toBe(null);
  });
});
