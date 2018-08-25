import { Component, OnInit } from '@angular/core';
import { HermesService } from '../hermes.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public hermes: HermesService) {
    this.hermes = hermes;
   }
  // Array of Display Contacts
  // contacts = [];
  // // Search
  // searchResults = [];
  // searchedContact = '';

  // constructor(public http: HttpClient) {
  //   this.http = http;
  //   this.http.get('http://localhost:3000/get-contact').subscribe( (response) => {
  //     console.log(response);
  //     this.contacts[0] = response;
  //   });
  //  }

  //  searchContact() {
  //   // this.displayDecision = true;

  //   this.http.get(`http://localhost:3000/searchContact/${this.searchedContact}`).subscribe( (response) => {
  //     console.log(response);
  //     this.searchResults[0] = response;
  //   });

  //   console.log(`searching contact.. ${this.searchedContact}`);
  //   this.searchedContact = '';
  // }

  ngOnInit() {
  }

}
