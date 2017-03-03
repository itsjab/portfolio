import { Component, OnInit } from '@angular/core';
import {Project} from "../../project";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  errorMessage: string;
  projects: Project[];
  mode = 'observable';


  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('../../assets/files/projects.json')
      .map(res => res.json())
      .subscribe(data => this.projects = data,
        err => console.log(err),
        () => console.log('Completed'));
  }
}

