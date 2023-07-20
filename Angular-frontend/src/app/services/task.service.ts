import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  getTask(searchParams: String = ""): Observable<any>{
    return this.http.get<any>(`${environment.taskApiURL}${searchParams}`)
  }

  postTask(data: any): Observable<any>{
    return this.http.post<any>(`${environment.taskApiURL}`, data)
  }

  putTask(id: String, data: any): Observable<any>{
    return this.http.put<any>(`${environment.taskApiURL}${id}`, data)
  }

  deleteTask(_id: any): Observable<any>{
    return this.http.delete<any>(`${environment.taskApiURL}${_id}`)
  }
  getOneTask(_id: String): Observable<any> {
    return this.http.get<any>(`${environment.taskApiURL}${_id}`);
  }
}
