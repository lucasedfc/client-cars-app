import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService]
})

export class RegisterComponent implements OnInit, OnDestroy {
 public title: string;
 public user: User;
 public subscriptions: Subscription[] = [];

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private _userService: UserService,
   private _snackBar: MatSnackBar

 ) {
  this.title = 'Register';
  this.user = new User(1, 'ROLE_USER', '', '', '', '');
 }

 ngOnInit() {
   console.log('Register loaded');
 }

 ngOnDestroy() {
  this.subscriptions.forEach(subscription => subscription.unsubscribe());
}

 register(form) {
   console.log('user data', this.user);
   this.subscriptions.push(this._userService.register(this.user).subscribe(
   res => {
     console.log('res', res);
      if(res.status === 'success') {
        this.user = new User(1, 'ROLE_USER', '', '', '', '');
        form.reset();
        this._snackBar.open(res.message, 'OK', { duration: 6000 });
      } else {
        this._snackBar.open(res.message, 'ERR', { duration: 6000 });
      }
    },
    error => {
      console.log('Error', <any>error);
    }
   ));
 }
}
