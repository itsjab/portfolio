import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router) { }

  navigateToHome(): void {
    this.router.navigate(['/projects'])
  }

  navigateToAbout(): void {
    this.router.navigate(['/about'])
  }

  openSideNavigation(): void {
    document.getElementById('sideNav').style.width = '15rem';
  }

  closeSideNavigation(): void {
    document.getElementById('sideNav').style.width = '0';
  }
}
