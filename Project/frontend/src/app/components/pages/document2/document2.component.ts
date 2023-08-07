import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Square } from 'src/app/shared/models/square';

@Component({
  selector: 'app-document2',
  templateUrl: './document2.component.html',
  styleUrls: ['./document2.component.css']
})
export class Document2Component implements OnInit {
  squareForm!:FormGroup;
  isSubmited = false;

  constructor(private formBuilder:FormBuilder, private userService: UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.squareForm = this.formBuilder.group({
      row:['', [Validators.required, Validators.pattern(/^-?[0-9]\d*(\.\d+)?$/)]],
      column:['', [Validators.required, Validators.pattern(/^-?[0-9]\d*(\.\d+)?$/)]],
      color: ['', [Validators.required]]
    })
  }

  get fc() {
    return this.squareForm.controls;
  }

  submit(){
    this.isSubmited=true;
    if (this.squareForm.invalid) {
      return;
    } else {
      this
    }
  }

}
