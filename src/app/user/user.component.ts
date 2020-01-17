import { Component, OnInit } from '@angular/core';
import { UsersHttpServiceService } from '../services/users-http-service.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserClass;

  constructor(public usersHttpService: UsersHttpServiceService) { }


  searchUser(searchTerm) {

    this.usersHttpService.searchUsers(searchTerm).then(
      (success) => {
        this.users = this.usersHttpService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() { this.searchUser('3xistentialcrisis'); }