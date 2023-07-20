import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  constructor( private http: HttpClient, private projectService : ProjectService,private router : Router,private route : ActivatedRoute) { }
  project : any = {}
  member : any  = []
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.projectService.getOneProject(id).subscribe((item) => {
        this.project = item.project
        this.member = item.project.member
      })
    }
  }

}
