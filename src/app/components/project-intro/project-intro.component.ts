import {Component, Input, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Project} from "../../project";

@Component({
  selector: 'project-intro',
  templateUrl: './project-intro.component.html',
  styleUrls: ['./project-intro.component.css']
})

export class ProjectIntroComponent{

  project: Project;

  constructor(private http: Http) {}
}
