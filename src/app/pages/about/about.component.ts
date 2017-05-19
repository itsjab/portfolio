import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../services/work-service/work.service";
import {Work} from "../../work";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  workExperience: Work[];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWorkExperience()
  }

  getWorkExperience(): void {
    this.workService
      .getWorkExperience()
      .then(work => this.workExperience = work)
  }


}
