import { Component, OnInit } from '@angular/core';
import { HabiticaApi3Service } from './../habitica-api-3.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private habiticaApi: HabiticaApi3Service){}
  
  ngOnInit() {
    this.userIsLoggedIn = this.habiticaApi.isUserLoggedIn();
  }

  logout(){
    if(this.habiticaApi.logout()){
      window.location.reload();
    }
  }

  public userIsLoggedIn = false;

}
