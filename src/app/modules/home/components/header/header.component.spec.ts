import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../../../environments/environment';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

class mockAuthService {
  public user$ = of({ name: 'Test', picture: 'testingpic', nickname: 'tester' })
  public logout(options?:any){
    return true;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [AuthModule.forRoot({
        domain: environment.auth0Settings.domain,
        clientId: environment.auth0Settings.clientId,
      })], providers: [{ provide: AuthService, useClass: mockAuthService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout', () => {
    spyOn(component, 'logout').and.callThrough();
    var logoutBtn = fixture.nativeElement.querySelector('#logout-btn');
    console.log(logoutBtn);
    logoutBtn.click();
    expect(component.logout).toHaveBeenCalled();
  });
});
