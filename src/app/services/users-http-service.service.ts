import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {RepoClass} from '../repo-class';
import {HttpClient} from '@angular/common/http';
import { UserClass } from '../user-class';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpServiceService {
  user: UserClass;
  repos: RepoClass[] = [];

  constructor(private http: HttpClient) {

    this.user = new UserClass(0, '', '');


  }

  searchUsers(searchTerm: string) {

    console.log(searchTerm);

    interface ApiResponse {
      id: number;
      login: string;
      avatar_url: string;
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.RepoAPIKey;
    console.log(searchPoint);

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {

          console.log(results);
          this.user = results;
          console.log(this.user);

          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

  getRepos(searchTerm) {

    interface ApiResponse {
     name: string;
     description: string;
     html_url: string;
     created_at: Date;
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.RepoAPIKey;

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse[]>(searchPoint).toPromise().then(
        (repoResults) => {
          console.log(repoResults);

          this.repos = [];

          for (let i = 0; i < repoResults.length; i++) {
            let repo = new RepoClass(repoResults[i].name, repoResults[i].description, repoResults[i].html_url, repoResults[i].created_at);
            this.repos.push(repo);
          }
          console.log(this.repos);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

}