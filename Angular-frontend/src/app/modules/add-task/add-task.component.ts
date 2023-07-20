import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private http: HttpClient, private projectService : ProjectService,private router : Router,private taskService : TaskService,private userService : UserService) { }
  project : Array<any> = []
  users : Array<any> = []
  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => {
      this.project = data.Projects;
    });
    this.userService.getUsers().subscribe(data => {
     this.users = data
     console.log(data);
    });
  }
  submitAddTask(f: NgForm) {
    
    
    this.taskService.postTask(f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['task'])
      }
    })
    
  }
 
  

}
