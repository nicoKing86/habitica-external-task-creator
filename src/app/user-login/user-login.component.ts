import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabiticaApi3Service } from './../habitica-api-3.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  rForm: FormGroup;
  post: string;
  name: string;
  password: string;

  ngOnInit(){

  }

  constructor(private fb: FormBuilder, private habiticaApi: HabiticaApi3Service){
    this.rForm = fb.group({
      name: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  doLogin(post){
    this.name = post.name;
    this.password = post.password;

    this.habiticaApi.login(this.name,this.password);
  }

}
