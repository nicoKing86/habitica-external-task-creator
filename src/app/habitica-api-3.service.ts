import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HabiticaApi3Service {

  constructor(private http: Http) { }

  private user = "";
  private key = "";

  public userData:any;

  login(userName,userPW){
    this.http.post('https://habitica.com/api/v3/user/auth/local/login',{'username':userName,'password':userPW})
    .subscribe(
        (response) => {
              /* this function is executed every time there's a new output */
              if(response.json().success){
                localStorage.setItem('habiticaUserID', response.json().data.id);
                this.user = response.json().data.id;
                localStorage.setItem('habiticaAPIToken', response.json().data.apiToken);
                this.key = response.json().data.apiToken;
              }
        },
        (err) => {
              /* this function is executed when there's an ERROR */
              console.log("ERROR: "+err);
        },
        () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log(this.isUserLoggedIn());
              window.location.reload();
        }
    ); 
  }

  logout(){
      localStorage.removeItem('habiticaUserID');
      localStorage.removeItem('habiticaAPIToken');

      return true;
  }

  isUserLoggedIn(){
    if(localStorage.getItem("habiticaUserID") === null && localStorage.getItem("habiticaAPIToken") === null){
      return false;
    }else{
      this.user = localStorage.getItem("habiticaUserID");
      this.key = localStorage.getItem("habiticaAPIToken");
      return true;
    }
  }

  getUser(): Observable<any> {  
      let headers = new Headers();
      headers.append('x-api-user', this.user);
      headers.append('x-api-key', this.key);

      let options = new RequestOptions({headers: headers});
      return this.http.get('https://habitica.com/api/v3/user',options);
  }

  getUserID(){
      return this.user;
  }
}
