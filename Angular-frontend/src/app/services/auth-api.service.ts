import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }
  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != undefined && token.length > 0){
      return true;
    }
    return false;
  }

  register(data: any){
    return this.http.post<any>(`${environment.registerApiUrl}`, data);
  }
  removeUser(_id: any): Observable<any>{
    return this.http.delete<any>(`${environment.userApiUrl}/${_id}`);
  }
  logout(){
    return this.http.get<any>(`${environment.logoutApiUrl}`);
  }
}
