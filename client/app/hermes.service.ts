import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HermesService {
  constructor(public http: HttpClient, private router: Router) {
    this.router = router;
    this.http = http;
    this.http.get('http://localhost:3000/get-contact').subscribe(response => {
      console.log(response);
      this.contacts = response;
    });
    // this.http.get('http://localhost:3000/get-contact').subscribe(response => {
    //   console.log(response);
    //   this.contacts = response;
    // });
  }
  contacts: any = [];
  // Search
  searchResults: any = [];
  searchedContact = '';
  searchContact() {
    // this.displayDecision = true;

    this.http
      .get(`http://localhost:3000/searchContact/${this.searchedContact}`)
      .subscribe(response => {
        console.log(response);
        this.searchResults = response;
      });

    console.log(`searching contact.. ${this.searchedContact}`);
    this.searchedContact = '';
  }
}
