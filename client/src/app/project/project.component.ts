import { Component, OnInit } from '@angular/core';
// reference service that calls the server api
import { ProjectService } from "../services/project.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  // create variable to hold list of projects
  projects: any;
  _id: string;
  name: string;
  dueDate: string;
  course: string;

  getProjects(): void {
    this.projectService.getProjects().subscribe(response => {
      this.projects = response
    })
  }

  addProject(): void {
    // create a new project object from the form values
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }

    // call the service and pass the new project
    this.projectService.addProject(newProject).subscribe(response => {
      this.getProjects()
      this.clearForm()
    })
  }

  clearForm(): void {
    this.name = null
    this.dueDate = null
    this.course = null
    this._id = null
  }

  ngOnInit(): void {
    // call method to fetch data when this component gets created
    this.getProjects()
  }

  deleteProject(_id: any) {
    if (confirm('Are you sure?')) {
      this.projectService.deleteProject(_id).subscribe(response => {
        this.getProjects()
      })
    }

  }

  // populate form w/selected project
  selectProject(p: any) {
    this._id = p._id;
    this.name = p.name;
    this.dueDate = formatDate(p.dueDate, 'mediumDate', 'en-CA');
    this.course = p.course;
  }

  updateProject() {
    let project = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }

    this.projectService.updateProject(project).subscribe(response => {
      this.getProjects()
      this.clearForm()
    })
  }
}
