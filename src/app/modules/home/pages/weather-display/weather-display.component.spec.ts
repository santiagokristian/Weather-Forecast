import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayComponent } from './weather-display.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../../../store/app.reducer';

describe('WeatherDisplayComponent', () => {
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDisplayComponent],
      imports: [StoreModule.forRoot(appReducer)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
