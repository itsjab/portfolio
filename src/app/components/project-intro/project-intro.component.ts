import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Project} from "../../project";
import {ProjectService} from "../../services/project-service/project.service";

@Component({
  selector: 'project-intro',
  templateUrl: './project-intro.component.html',
  styleUrls: ['./project-intro.component.css']
})

export class ProjectIntroComponent implements OnInit {

  @Input() select: string;

  private project: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {

    this.getProject();
  }

  getProject(): void {
    this.projectService
      .getSpecificProject(this.select)
      .then(project => {console.log(this.select), this.project = project, console.log(project)})
  }

}
