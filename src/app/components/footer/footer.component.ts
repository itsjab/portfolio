import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() project: string;
  frozen: boolean;
  festival: boolean;
  tim: boolean;
  socialride: boolean;
  roommate: boolean;
  buntes: boolean;
  light: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setFooterBackground();
  }

  navigateToHome(): void {
    this.router.navigate(['/projects']);
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToLegalNotice(): void {
    this.router.navigate(['/legal']);
  }

  setFooterBackground(): void {
    switch (this.project) {
      case 'frozen':
        this.frozen = true;
        break;
      case 'festival':
        this.festival = true;
        break;
      case 'tim':
        this.tim = true;
        break;
      case 'socialride':
        this.socialride = true;
        break;
      case 'roommate':
        this.roommate = true;
        break;
      case 'buntes':
        this.buntes = true;
        break;
      default:
        this.light = true;
    }
  }

}
