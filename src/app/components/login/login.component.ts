import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
 public title: string;

 constructor(
   private route: ActivatedRoute,
   private router: Router
 ) {
  this.title = 'Login';
 }

 ngOnInit() {
   console.log('Login loaded');
 }
}
