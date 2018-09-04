import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.scss"]
})
export class UserloginComponent implements OnInit {
  helper = new JwtHelperService();
  credentials: any = {
    email: "",
    pwd: ""
  };
  returnURL: string;
  returnData;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams["returnUrl"] || "/home";
  }
  // there is a console.log --before data (in the subscribe)
  login() {
    console.log("this is the forms cred" + this.credentials);
    console.log("this is returnUrl" + this.returnURL);
    this.auth
    .login(this.credentials.email, this.credentials.pwd)
    .toPromise()
    .then((data: any) => {
      console.log(data);
      // this.returnData = data;
      if (data.message === false) {
        this.credentials.email = "";
        this.credentials.pwd = "";
        } else {
          localStorage.setItem("currentUsr", data.token);
          console.log(
            this.helper.decodeToken(localStorage.getItem("currentUsr")));
          // console.log('this is the data' + );
          // save data into local storage
          this.router.navigateByUrl(this.returnURL);
          // navigate user to home page
        }})
    .catch(err => {
      console.log(err);
    });
  }
}
