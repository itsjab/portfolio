import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'project-navigation',
  templateUrl: './project-navigation.component.html',
  styleUrls: ['./project-navigation.component.scss']
})
export class ProjectNavigationComponent {

  @Input() previous: string;
  @Input() next: string;
  @Input() index: number;

  constructor(private router: Router) {}

  selectPreviousProject(): void {
    this.router.navigate([this.previous]);
  }

  selectNextProject(): void {
    this.router.navigate([`/${this.next}`]);
  }



}
