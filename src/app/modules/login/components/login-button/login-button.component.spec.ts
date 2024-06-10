import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButtonComponent } from './login-button.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../../../environments/environment';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginButtonComponent,AuthModule.forRoot({
        domain: environment.auth0Settings.domain,
        clientId: environment.auth0Settings.clientId,
      }),]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
