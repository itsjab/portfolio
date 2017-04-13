import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Project} from "../../project";

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get('../../assets/files/projects.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  getSpecificProject(id: string): Promise<Project> {
    return this.getProjects()
      .then(projects => projects.find(project => project.id === id))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
