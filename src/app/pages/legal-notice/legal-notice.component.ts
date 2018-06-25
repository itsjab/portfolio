import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

}
