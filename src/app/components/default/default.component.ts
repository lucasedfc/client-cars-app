import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  providers: [UserService, CarService]
})

export class DefaultComponent implements OnInit {
 public title: string;
 public user: User;
 public subs: Subscription[] = [];
 public token: string;
 public identity;
 public cars: Car[] = [];

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   // tslint:disable-next-line:variable-name
   public _userService: UserService,
   public carService: CarService
 ) {
  this.title = 'Home';
  this.user = new User(1, 'ROLE_USER', '', '', '', '');
 }

 ngOnInit() {
   this.carService.getCars().subscribe(
     res => {
      console.log('res cars', res);
      if (res.status === 'success') {
        this.cars = res.cars;
      }
     },
     error => {
      console.log('err', error);
     }
   )
 }

}
