import { UserService } from './services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'client-cars';
  public identity;
  public token;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }

  ngDoCheck() {
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
}
