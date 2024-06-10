import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';

class MockRouter {
  // Router
  public events = of(new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login'));
}
describe('AppComponent', () => {
  let router:Router;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppComponent, AuthModule.forRoot({
        domain: environment.auth0Settings.domain,
        clientId: environment.auth0Settings.clientId,
      }),StoreModule.forRoot(appReducer)],
      providers:[{provide:Router, useClass:MockRouter}]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    router = fixture.debugElement.injector.get( Router);

    /**
     * Trigger initial data binding
     */
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
