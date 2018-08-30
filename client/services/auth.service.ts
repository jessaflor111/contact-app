import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(email: string, pwd: string) {
    console.log('this call is working');
    return this.http.post('http://localhost:3000/api/users/login', {
      email: email,
      password: pwd
    });

  }
}
