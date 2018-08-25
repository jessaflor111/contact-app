import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // // Display Contacts
  // contacts = [];
  // newContact = "";
  // lastName = "";
  // //
  // displayDecision = false;
  // // Searched Contacts
  // searchResults = [];
  // searchedContact= "";
  // constructor(public http: HttpClient) {
  //   this.http = http;
  //   this.http.get<any>("http://localhost:3000/get-contact")
  //   .subscribe( (response) => {
  //     console.log(response);
  //     this.contacts = response;
  //   });
  // }

  // addContact() {

  //   this.http.get<any>(`http://localhost:3000/add-contact/${this.newContact}`)
  //   .subscribe( (response) => {
  //     console.log(response);
  //   });

  //   console.log("adding contact..." + this.newContact);
  //   this.newContact = "";
  // }

  // searchContact(){
  //   this.displayDecision = true;

  //   this.http.get<any>(`http://localhost:3000/searchContact/${this.searchedContact}`).subscribe( (response) => {
  //     console.log(response);
  //     this.searchResults = response;
  //   });

  //   console.log(`searching contact.. ${this.searchedContact}`);
  //   this.searchedContact = "";
  // }


}
