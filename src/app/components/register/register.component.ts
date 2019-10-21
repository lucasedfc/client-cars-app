import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
 public title: string;

 constructor(
   private route: ActivatedRoute,
   private router: Router
 ) {
  this.title = 'Register';
 }

 ngOnInit() {
   console.log('Register loaded');
 }
}
