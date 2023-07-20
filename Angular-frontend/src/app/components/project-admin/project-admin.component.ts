import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {
  project : Array<any> = []
  constructor(private http: HttpClient, private projectService : ProjectService,private router : Router) { }

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => {
      this.project = data.Projects;
     
      
    });
  }
  removeProject(id: any){
    if(window.confirm("Bạn có muốn xóa không")){
      this.projectService.deleteProject(id).subscribe((data) => {
     
      })
      this.project = this.project.filter((item) => item._id !== id)
    }
  }

}
