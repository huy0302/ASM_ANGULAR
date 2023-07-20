import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() starRating: number = 0;
  @Input() ProductId: any;
  @Output('checkStar') voted = new EventEmitter<any>()
  constructor() { }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
  }
  setStar(index: any){
    const data = {
      id: this.ProductId,
      starRating: index
    }
    this.voted.emit(data) 
  }
  

}
