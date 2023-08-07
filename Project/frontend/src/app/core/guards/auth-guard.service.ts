import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  user!:User;
  constructor(private userService:UserService, private router:Router) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.user && this.user.isAdmin){
      return true;
    } else {
      return false;
    }
    
  }
}
