/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GreetButtonComponent } from './greet-button/greet-button.component';
import { UserListComponent } from './user-list/user-list.component';
import { GreetingService } from './services/greeting.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GreetButtonComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GreetButtonComponent } from './greet-button/greet-button.component';
import { UserListComponent } from './user-list/user-list.component';
import { GreetingService } from './services/greeting.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    GreetButtonComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }