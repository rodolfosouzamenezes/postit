import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from 'src/app/models/enums/navbar.enum';
import { NavbarItemInterface } from 'src/app/models/interfaces/navbar-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy{
  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum;
  public routeSubscription: Subscription;
  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon: 'assets/imgs/navbar_feed_disabled.svg',
      iconActive: 'assets/imgs/navbar_feed_enabled.svg',
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: 'assets/imgs/navbar_home_disabled.svg',
      iconActive: 'assets/imgs/navbar_home_enabled.svg',
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon: 'assets/imgs/navbar_profile_disabled.svg',
      iconActive: 'assets/imgs/navbar_profile_enabled.svg',
    },
  ];

  constructor(
    private readonly router: Router,
  ) {
    this.routeSubscription = router.events
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

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
