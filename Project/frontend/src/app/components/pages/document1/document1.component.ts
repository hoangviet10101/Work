import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/data.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-document1',
  templateUrl: './document1.component.html',
  styleUrls: ['./document1.component.css']
})
export class Document1Component implements OnInit {
  user_login_data: User[] =[];
  
  constructor(private user_service:UserServiceService, activatedRoute:ActivatedRoute) {
    let user_login_dataObservable:Observable<User[]>;
    activatedRoute.params.subscribe((params) => {
      user_login_dataObservable = user_service.getAllUser();
      user_login_dataObservable.subscribe((serverUserData) => {
        this.user_login_data = serverUserData
        console.log(this.user_login_data)
      })
    })
  }

  ngOnInit(): void {
  }

}
