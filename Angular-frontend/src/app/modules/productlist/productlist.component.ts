import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  ListUsers: Array<any> = [];
  listUser: any = [];
  listTask: any[] = [];
  listProject: any = [];
  totalProject: number = 0;
  constructor(
    private router: Router,
    private TaskApiService: TaskService,
    private projectApiURL: ProjectService,
    private UserService: UserService
  ) {}

  userList: Array<any> = [];
  ngOnInit(): void {
    this.TaskApiService.getTask().subscribe((data) => {
      this.listTask = data.tasks;
    });
    this.projectApiURL.getProject().subscribe((data) => {
      console.log(data.Projects);
      this.listProject = data.Projects;
      if (data.Projects) {
        data.Projects.forEach((item: any) => {
          this.totalProject += item.moneyProject;
        });
      }
    });
    this.UserService.getUsers().subscribe((data) => {
      this.listUser = data;
    });
  }
}
