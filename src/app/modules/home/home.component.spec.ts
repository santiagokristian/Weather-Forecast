import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent],
      imports: [AuthModule.forRoot({
        domain: environment.auth0Settings.domain,
        clientId: environment.auth0Settings.clientId,
      }), HomeRoutingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
