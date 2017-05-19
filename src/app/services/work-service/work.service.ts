import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Work} from '../../work';

@Injectable()
export class WorkService {

  constructor(private http: Http) { }

  getWorkExperience(): Promise<Work[]> {
    return this.http.get('../../assets/files/work-experience.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
