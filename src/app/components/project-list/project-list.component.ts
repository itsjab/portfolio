import { Component, OnInit } from '@angular/core';
import {Project} from "../../project";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  errorMessage: string;
  projects: Project[];
  mode = 'observable';


  constructor(
    private http: Http,
    private router: Router) { }

  ngOnInit() {
    this.http.get('../../assets/files/projects.json')
      .map(res => res.json())
      .subscribe(data => this.projects = data,
        err => console.log(err),
        () => console.log('Completed'));
  }

  selectProject(project) {
    this.router.navigate([`/${project}`])
  }
}

