import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/data.service';
import { Square } from 'src/app/shared/models/square';

@Component({
  selector: 'app-square-grid',
  templateUrl: './square-grid.component.html',
  styleUrls: ['./square-grid.component.css']
})

export class SquareGridComponent implements OnInit {
  gridCells: any[] = new Array(25); // 5x5 grid

  square_data:Square[] = [];
  constructor(private user_service:UserServiceService, activatedRoute:ActivatedRoute) {
    let square_data_Observable:Observable<Square[]>;
    activatedRoute.params.subscribe((params) => {
      square_data_Observable = user_service.getSquare();
      square_data_Observable.subscribe((serverSquareData) => {
        this.square_data = serverSquareData;
      })
    })
  }
  ngOnInit(): void {
  }

}
