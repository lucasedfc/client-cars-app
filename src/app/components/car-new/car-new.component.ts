import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss'],
  providers: [CarService]
})
export class CarNewComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  public page_title: string;
  public identity;
  public token;
  public car: Car;
  public statuscar: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private carService: CarService
  ) {
    this.page_title = 'Create new car';
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

  submit(form) {
    this.carService.create(this.token, this.car).subscribe(
      res => {
        console.log(res);
        if (res.code === 200) {
          this.statuscar = 'success';
          this.router.navigate(['/home']);
        } else {
          this.statuscar = 'error';
        }
      },
      error => {
        console.log('err', error);
        this.statuscar = 'error';
      }
    );
  }

}
