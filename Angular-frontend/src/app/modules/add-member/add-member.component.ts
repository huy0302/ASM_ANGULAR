import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  addUserForm = new FormGroup({
    name : new FormControl
  })
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  submitAddUser(f: NgForm) {
    
    this.UserService.addUser(f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['member'])
      }
    })
    
  }

}
