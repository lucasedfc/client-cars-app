import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarNewComponent } from './components/car-new/car-new.component';
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'home',
    component: DefaultComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create-car',
    component: CarNewComponent
  },
  {
    path: 'edit-car/:id',
    component: CarEditComponent
  },
  {
    path: 'car/:id',
    component: CarDetailComponent
  },
  {
    path: 'logout/:sure',
    component: LoginComponent
  },
  {
    path: '**',
    component: DefaultComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
