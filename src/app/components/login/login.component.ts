import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnDestroy {
 public title: string;
 public user: User;
 public subs: Subscription[] = [];
 public token: string;
 public identity;

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   // tslint:disable-next-line:variable-name
   public _userService: UserService
 ) {
  this.title = 'Login';
  this.user = new User(1, 'ROLE_USER', '', '', '', '');
 }

 ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
 }

 login(form) {
   console.log(this.user);
   this.subs.push(this._userService.signin(this.user).subscribe(
     res => {
      if (res.status !== 'error') {
        // save token
        this.token = res;
        localStorage.setItem('token', this.token);
        // get user data
        this.subs.push(this._userService.signin(this.user, true).subscribe(
          result => {
           this.identity = result;
           localStorage.setItem('identity', JSON.stringify(this.identity));
          },
          err => {
           console.log('res err', err);
          }
        ));
      } else {
        console.log('Login error', res.message);
      }
     },
     err => {
      console.log('res err', err);
     }
   ));
 }
}
