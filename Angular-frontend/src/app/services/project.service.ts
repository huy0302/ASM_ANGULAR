import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  getProject(searchParams: String = ""): Observable<any>{
    return this.http.get<any>(`${environment.projectApiURL}${searchParams}`)
  }

  postProject(data: any): Observable<any>{
    return this.http.post<any>(`${environment.projectApiURL}`, data)
  }

  putProject(id: String, data: any): Observable<any>{
    return this.http.patch<any>(`${environment.projectApiURL}${id}`, data)
  }

  deleteProject(_id: any): Observable<any>{
    return this.http.delete<any>(`${environment.projectApiURL}${_id}`)
  }
  getOneProject(_id: String): Observable<any> {
    return this.http.get<any>(`${environment.projectApiURL}${_id}`);
  }
}
