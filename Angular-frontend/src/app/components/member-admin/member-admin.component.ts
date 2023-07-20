import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member-admin',
  templateUrl: './member-admin.component.html',
  styleUrls: ['./member-admin.component.css'],
})
export class MemberAdminComponent implements OnInit {
  users: Array<any> = [];

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authApiService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  removeUser(id: number) {
    if (window.confirm('Bạn có muốn xóa không')) {
      this.authApiService.removeUser(id).subscribe((data) => {});
      this.users = this.users.filter((item) => item._id !== id);
    }
  }
}
