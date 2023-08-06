import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmited = false;
  returnUrl = '';

  constructor(private formBuilder:FormBuilder, private userService: UserService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmited = true;
    if(this.registerForm.invalid){
      return;
    } else {
      const fv = this.registerForm.value;
      const user : IUserRegister ={
        name: fv.name,
        email: fv.email,
        password: fv.password
      };

      this.userService.register(user).subscribe(_=> {
        this.router.navigateByUrl(this.returnUrl);
      })
    }
  }
}
