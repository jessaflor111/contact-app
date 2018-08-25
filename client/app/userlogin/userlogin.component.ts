import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  credentials: any = {
    email: '',
    pwd: ''
  };
  returnURL: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials.email, this.credentials.pwd).subscribe(data => {
      // { message: false }
      // this.credentials.email = '',
      // save data into local storage
      // navigate user to home page
    });
  }

}
