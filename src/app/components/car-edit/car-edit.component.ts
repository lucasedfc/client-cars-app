import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: '../car-new/car-new.component.html',
  styleUrls: ['./car-edit.component.scss'],
  providers: [CarService, UserService]
})
export class CarEditComponent implements OnInit {
  public car: Car;
  // tslint:disable-next-line:variable-name
  public page_title: string;
  public token;
  public statusCar;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    public _userService: UserService,
    public carService: CarService
  ) {
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = +params.id;
      this.getCar(id);
    });
  }

  getCar(id) {
      this.carService.getCar(id).subscribe(
        res => {
          if (res.status === 'success') {
            this.car = res.cars;
            console.log('cars', this.car);
            this.page_title = `Edit ${this.car.title}`;
          } else {
            this.router.navigate(['home']);
          }
        },
        error => {
          console.log('err', error);
        }
      );
  }

  submit() {
    console.log('update', this.car.id);
    this.carService.update(this.token, this.car, this.car.id).subscribe(
      res => {
        if (res.status === 'success') {
          console.log('car updated', res);
          this.statusCar = 'success';
          this.car = res.car;
          this.router.navigate(['/car', this.car.id]);
        } else {
          this.statusCar = 'error';
        }
      },
      error => {
        console.log('err updating car', error);
        this.statusCar = 'error';
      }
    );
  }

}

