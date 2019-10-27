import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  providers: [UserService]
})

export class DefaultComponent implements OnInit {
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
  this.title = 'Home';
  this.user = new User(1, 'ROLE_USER', '', '', '', '');
 }

 ngOnInit() {
 }

}
