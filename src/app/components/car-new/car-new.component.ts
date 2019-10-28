import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss']
})
export class CarNewComponent implements OnInit {

  public title: string;
  public identity;
  public token;
  public car: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService
  ) {
    this.title = 'Create new car';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }

  ngOnInit() {
    if (this.identity == null) {
      this.router.navigate(['/login']);
    } else {
      this.car = new Car(1, '', '', 1, '', null, null);
    }
  }

  addCar(form) {
    console.log(this.car);
  }

}
