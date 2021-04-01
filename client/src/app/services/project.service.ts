import { Injectable } from '@angular/core';
// add http library to make calls to server api
import { HttpClient } from "@angular/common/http";

// get api server domain from config file
//const config = import('../../../../config/globals')

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // service requires an http client when it's created
  constructor(private http: HttpClient) { }

  // get
  getProjects() {
    return this.http.get('http://localhost:3000/projects')
  }
}
