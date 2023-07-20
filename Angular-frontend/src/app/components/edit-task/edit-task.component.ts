import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private http: HttpClient, private projectService : ProjectService,private router : Router,private taskService : TaskService,private userService : UserService,private route: ActivatedRoute) { }
  project : Array<any> = []
  users : Array<any> = []
  taskEdit:any = {};
  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => {
      this.project = data.Projects;
    });
    this.userService.getUsers().subscribe(data => {
     this.users = data
     console.log(data);
    });
    let that = this
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.taskService.getOneTask(id).subscribe((data) => {
        this.taskEdit =  data.task
      })
    }
  }
  submitEditTask(f: NgForm) {
    console.log(f.value);
    this.taskService.putTask( this.taskEdit._id ,f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['task'])
      }
    })
  }
 }

  
  


