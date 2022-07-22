import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public canShowNavbar = false;
  public routesWithoutNavbar: string[] = ['/login', '/register'];
  public routeSubscription: Subscription;

  constructor(
    private readonly router: Router,
  ) {
    this.routeSubscription = router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      const url: string = route.urlAfterRedirects;
      const include = this.routesWithoutNavbar.includes(url);

      if (!include) { this.canShowNavbar = true; }
       else { this.canShowNavbar = false; }
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  };
}
