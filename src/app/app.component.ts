import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
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
}
