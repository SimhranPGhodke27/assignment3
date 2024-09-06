/*import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: string[] = [];
}
*/
import { Component,OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UserService } from '../services/user.service';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone:true,
  imports:[CommonModule,HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
   users: any[] = [];
   constructor(private userService: UserService) {}

  ngOnInit():void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
  });
  }
}
  
