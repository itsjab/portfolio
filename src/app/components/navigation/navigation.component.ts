import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router) { }

  navigateToHome(): void {
    this.router.navigate(['/projects']);
    this.closeSideNavigation();
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
    this.closeSideNavigation();
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
    this.closeSideNavigation();
  }

  openSideNavigation(): void {
    document.getElementById('sideNav').style.width = '14rem';
    document.getElementById('sideNavOverlay').style.width = '100vw';
  }

  closeSideNavigation(): void {
    document.getElementById('sideNav').style.width = '0';
    document.getElementById('sideNavOverlay').style.width = '0';
  }
}
