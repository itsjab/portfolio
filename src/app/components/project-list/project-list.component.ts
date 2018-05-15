import { Component, OnInit } from '@angular/core';
import {Project} from '../../project';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project-service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects);
  }

  selectProject(project): void {
    this.router.navigate([`/${project}`]);
  }
}

