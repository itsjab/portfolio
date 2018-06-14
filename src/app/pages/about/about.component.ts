import { Component, OnInit } from '@angular/core';
import {WorkService} from '../../services/work-service/work.service';
import {Work} from '../../work';
import {HelperService} from '../../services/helper-service/helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  workExperience: Work[];

  constructor(private workService: WorkService,
              private helperService: HelperService) { }

  ngOnInit() {
    this.getWorkExperience();
    this.helperService.scrollToTop();
  }

  getWorkExperience(): void {
    this.workService
      .getWorkExperience()
      .then(work => this.workExperience = work);
  }


}
