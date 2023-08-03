import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/data.service';
import { UserData } from 'src/app/shared/models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_datas: UserData[] = [];

  constructor(private user_service:UserServiceService, activatedRoute:ActivatedRoute) {
    let user_datasObservable:Observable<UserData[]>;
    activatedRoute.params.subscribe((params)=> {
      if (params.searchTerm) 
        user_datasObservable = this.user_service.getUserDataBySearchTerm(params.searchTerm);
      else
        user_datasObservable = user_service.getAll();
        
        user_datasObservable.subscribe((serverUserData) => {
          this.user_datas = serverUserData;
        })
      })
      
  }

  
  ngOnInit(): void {
  }

}
