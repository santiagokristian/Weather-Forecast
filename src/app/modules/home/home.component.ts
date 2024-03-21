import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  private userSubscription: Subscription;
  constructor(public auth: AuthService) {
    this.userSubscription = this.auth.user$.subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}
