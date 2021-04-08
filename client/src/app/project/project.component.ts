import { Component, OnInit } from '@angular/core';
// reference service that calls the server api
import { ProjectService } from "../services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  // create variable to hold list of projects
  projects: any;
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
  }

  ngOnInit(): void {
    // call method to fetch data when this component gets created
    this.getProjects()
  }

}
