import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
 
  @Input()
  private rating: number = 0;
  stars:boolean[];
  @Input()
  private readonly: boolean = true;
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
  }
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index+1;
      //this.ngOnInit();
      this.ratingChange.emit( this.rating );
    }
    
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("------");
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
