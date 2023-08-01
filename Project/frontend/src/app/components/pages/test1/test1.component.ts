import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user_service.service';
import { UserData } from 'src/app/shared/models/user_data';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  userData!:UserData;
  constructor(activatedRoute: ActivatedRoute, userService:UserServiceService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.userData = userService.getUserByID(params.id);
    })
  }

  ngOnInit(): void {
  }

}
