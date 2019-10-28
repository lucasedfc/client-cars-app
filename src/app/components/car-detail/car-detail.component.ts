import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  providers: [CarService, UserService]
})
export class CarDetailComponent implements OnInit {
  public car: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    public _userService: UserService,
    public carService: CarService
  ) {

  }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    this.route.params.subscribe( params => {
      const id = +params.id;
      this.carService.getCar(id).subscribe(
        res => {
          if (res.status === 'success') {
            console.log('car', res);
            this.car = res.cars;
          } else {
            this.router.navigate(['home']);
          }
        },
        error => {
          console.log('err', error);
        }
      )

    });
  }

}
