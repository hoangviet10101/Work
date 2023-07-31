import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user_service.service';
import { UserData } from 'src/app/shared/models/user_data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_datas: UserData[] = [];

  constructor(private user_service:UserServiceService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=> {
      if (params.searchTerm) 
        this.user_datas = this.user_service.getUserDataBySearchTerm(params.searchTerm);
      else
        this.user_datas = user_service.getAll();
    })
  }

  ngOnInit(): void {
  }

}
