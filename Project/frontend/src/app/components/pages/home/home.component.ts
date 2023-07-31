import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user_service.service';
import { UserData } from 'src/app/shared/models/user_data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_datas: UserData[] = [];

  constructor(private user_service:UserServiceService) {
    this.user_datas = user_service.getAll();
  }

  ngOnInit(): void {
  }

}
