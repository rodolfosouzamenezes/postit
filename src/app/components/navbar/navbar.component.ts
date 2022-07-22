import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from 'src/app/models/enums/navbar.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  constructor(
    private readonly router: Router,
  ) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      if (route.url.includes('/feed')) {
        this.currentNavbar = NavbarEnum.FEED;
      }
      if (route.url.includes('/home')) {
        this.currentNavbar = NavbarEnum.HOME;
      }
      if (route.url.includes('/profile')) {
        this.currentNavbar = NavbarEnum.PROFILE;
      }
    });
  }
}
