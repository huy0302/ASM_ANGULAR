import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private ProjectService: ProjectService,
    private router: Router,
    private UserService: UserService) { }
    listUser: any = [];
    members: any = [];
    listUserFilter: any = [];
    search = '';
  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data)=>{
      this.listUser  = data
    })
    
  }
  addUser(user : any) {
    this.members.push({userId: user})
   this.listUser = this.listUser.filter((item: any)=> item._id !== user._id)
  }
  submitAddProject(f: NgForm) {
    const memberId : any  =[];
    this.members.forEach((item:any)=>{
      memberId.push({
        userId : item.userId._id
      })
    })
    f.value.member= memberId
    f.value.project_money = +f.value.project_money
    this.ProjectService.postProject(f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['project'])
      }
    })
    
  }

}
