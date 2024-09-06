import { RouterOutlet } from '@angular/router';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import{GreetButtonComponent} from './greet-button/greet-button.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HttpClientModule,RouterOutlet,UserListComponent,GreetButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greet-users-app';
}
