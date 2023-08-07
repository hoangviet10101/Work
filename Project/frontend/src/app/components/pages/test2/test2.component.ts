import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/data.service';
import { Square } from 'src/app/shared/models/square';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  squareData:Square[] = [];
  
  constructor(private user_service:UserServiceService, activatedRoute:ActivatedRoute) {
    let square_data_Observable:Observable<Square[]>;
    activatedRoute.params.subscribe((params) => {
      square_data_Observable = user_service.getSquare();
      square_data_Observable.subscribe((serverSquareData) => {
        this.squareData = serverSquareData;
      })
    })
  }
  ngOnInit(): void {
  }
  firstSquare = this.squareData[0];
  squareRow =this.firstSquare.row;
  squareColumn = this.firstSquare.column;
  squareColor = this.firstSquare.color;
}
