import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './components/default/default.component';
import { CarNewComponent } from './components/car-new/car-new.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    CarNewComponent,
    CarEditComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
