import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private AuthApiService: AuthApiService) { }
  user: any = {};
  ngOnInit(): void {
    if(localStorage.getItem('user') !== undefined && localStorage.getItem('user')){
      const userLocal:any = localStorage.getItem('user')
      this.user = JSON.parse(userLocal)
    }
  
  }
  logout(){
    this.AuthApiService.logout().subscribe((res) => {
      if(res.success){
        this.router.navigate(['/signin'])
        localStorage.removeItem("token")
      }
    })
  }

}
