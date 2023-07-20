import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
 
})
export class EditProjectComponent implements OnInit {

  constructor(private ProjectService: ProjectService, private route: ActivatedRoute, private router: Router,private UserService: UserService) { }
  projectEdit:any = {};
  listUser: any = [];
  members: any = [];
  listUserFilter: any = [];
  search = '';
  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data)=>{
      this.listUser  = data
    })
    let that = this
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.ProjectService.getOneProject(id).subscribe((data) => {
        this.projectEdit =  data.project
        this.members = data.project.member
        this.listUser = data.project.member.forEach ((item: any)=>{
          this.listUser.filter((data: any)=>
          data._id !== item.userId._id)
        })
      })
    }
  }
  submitEditProject(f: NgForm) {
    console.log(f.value);
    if(f.value.nameProject === ''){
      f.value.nameProject = this.projectEdit.nameProject
    }
    this.ProjectService.putProject( this.projectEdit._id ,f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['project'])
      }
    })
    
  }
  addUser(user : any) {
    this.members.push({userId: user})
   this.listUser = this.listUser.filter((item: any)=> item._id !== user._id)
  }

}
