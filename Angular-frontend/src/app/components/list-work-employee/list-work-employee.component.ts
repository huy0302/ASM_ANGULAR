import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-work-employee',
  templateUrl: './list-work-employee.component.html',
  styleUrls: ['./list-work-employee.component.css']
})
export class ListWorkEmployeeComponent implements OnInit {
  taskList:Array<any> = []
  constructor( private http:HttpClient , private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(data => {
      this.taskList = data.tasks;
      
      
     
      
    });
  }
  removeTask(id: any){
    if(window.confirm("Bạn có muốn xóa không")){
      this.taskService.deleteTask(id).subscribe((data) => {
     
      })
      this.taskList = this.taskList.filter((item) => item._id !== id)
    }
  }

}
