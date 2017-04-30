import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../project";
import {ProjectService} from "../../services/project-service/project.service";

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnInit {

  @Input() select: string;
  private frozen: boolean;
  private socialRide: boolean;
  private project: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProject();
    this.setProjectStatsBackground();
  }

  getProject(): void {
    this.projectService
      .getSpecificProject(this.select)
      .then(project => this.project = project)
  }

  setProjectStatsBackground(): void {
    switch(this.select) {
      case 'frozen-sea':
        this.frozen = true;
        break;
      case 'social-ride':
        this.socialRide = true;
        break;
    }
  }

}
