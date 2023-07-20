import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AuthApiService: AuthApiService, private router: Router) { }

  ngOnInit(): void {
  }
  registerForm(f: NgForm) {
    this.AuthApiService.register(f.value).subscribe((data) => {
      if(data.name){
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/products']);
      }
    })
    
  }

}
