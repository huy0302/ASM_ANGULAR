import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  urlApi = "http://localhost:8080/api/signin"
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }
  submitLoginForm(f: NgForm) {
    this.http.post<any>(this.urlApi, f.value).subscribe((res) => {
      if(res.token){
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['/products'])
      }
    })
  }

}
