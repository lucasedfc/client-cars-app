import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnDestroy, OnInit {
 public title: string;
 public user: User;
 public subs: Subscription[] = [];
 public token: string;
 public identity;
 public status;

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   // tslint:disable-next-line:variable-name
   public _userService: UserService
 ) {
  this.title = 'Login';
  this.user = new User(1, 'ROLE_USER', '', '', '', '');
 }

 ngOnInit() {
   this.logout();
 }

 ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
 }

 login(form) {
   console.log(this.user);
   this.subs.push(this._userService.signin(this.user).subscribe(
     res => {
      if (res.status !== 'error') {
        this.status = 'success';
        // save token
        this.token = res;
        localStorage.setItem('token', this.token);
        // get user data
        this.subs.push(this._userService.signin(this.user, true).subscribe(
          result => {
           this.identity = result;
           localStorage.setItem('identity', JSON.stringify(this.identity));

           this.router.navigate(['home']);
          },
          err => {
           console.log('res err', err);
          }
        ));
      } else {
        console.log('Login error', res.message);
        this.status = 'error';
      }
     },
     err => {
      console.log('res err', err);
     }
   ));
 }

 logout() {
   this.route.params.subscribe(
     params => {
       const logout = +params.sure;
       if (logout === 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;
        this.router.navigate(['home']);
      }
     }
   );
 }
}
