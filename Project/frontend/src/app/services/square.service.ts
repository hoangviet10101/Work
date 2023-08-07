import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Square } from '../shared/models/square';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ISquare } from '../shared/interfaces/ISquare';
import { SQUARE } from '../shared/constants/urls';

const SQUARE_KEY = 'Square'
@Injectable({
  providedIn: 'root'
})
export class SquareService {
  private squareSubject = new BehaviorSubject<Square>(this.getSquareFromLocalStorage());
  public squareObservable:Observable<Square>;


  constructor(private http:HttpClient, private toastrService:ToastrService) { 
    this.squareObservable = this.squareSubject.asObservable();
  }

  draw(squareDraw:ISquare): Observable<Square> {
    return this.http.post<Square>(SQUARE, squareDraw).pipe(
      tap({
        next: (square) => {
          this.setSquareToLocalStorage(square);
          this.squareSubject.next(square);
        },
      })
    )
  }

  private setSquareToLocalStorage(square:Square){
    localStorage.setItem(SQUARE_KEY, JSON.stringify(square));
  }
  
  private getSquareFromLocalStorage():Square{
    const squareJson = localStorage.getItem(SQUARE_KEY);
    if (squareJson) {
      return JSON.parse(squareJson) as Square;
    } else {{
      return new Square()
    }}
    
  }
}
