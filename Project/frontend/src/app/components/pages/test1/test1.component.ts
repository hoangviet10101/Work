import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/data.service';
import { UserData } from 'src/app/shared/models/data';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  user_data! :UserData;
  constructor(activatedRoute: ActivatedRoute, userService:UserServiceService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        userService.getUserByID(params.id).subscribe(serverUserData => {
          this.user_data = serverUserData;
          console.log(serverUserData)
        });
    })
  }

  ngOnInit(): void {
  }

}


