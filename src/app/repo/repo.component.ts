import { Component, OnInit } from '@angular/core';
import { UsersHttpServiceService } from '../services/users-http-service.service';
import { UserClass } from '../user-class';
import { RepoClass } from '../repo-class';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  users: UserClass;
  repos: RepoClass[] = [];

  constructor(public userHttpService: UsersHttpServiceService) { }

  ngOnInit() {
    this.searchUser('3xistentialcrisis');
    this.getRepos('3xistentialcrisis');
  }

  searchUser(searchTerm) {

    this.userHttpService.searchUsers(searchTerm).then(
      (success) => {
        this.users = this.userHttpService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRepos(searchTerm) {
    this.userHttpService.getRepos(searchTerm).then(
      (results) => {
        this.repos = this.userHttpService.repos;
        console.log(this.repos);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}