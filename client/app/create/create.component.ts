import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  contacts = [];
  newContact = {
    createFirstName: 'Jamie',
    createLastName: '',
    createPhone: '',
    createEmail: '',
    createDob: ''
  };

  constructor(public http: HttpClient) {
    this.http = http;
    // this.http.get<any>("http://localhost:3000/add-contact").subscribe((response) => {
    //   console.log(response);
    //   this.contacts = response;
    // });


  }

  postFunction = () => {
    this.newContact.createFirstName = (<HTMLInputElement>document.getElementById('firstName')).value;

        this.http.post('http://localhost:3000/add-contact/', this.newContact)
        .toPromise()
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
  }



  ngOnInit() {
  }

}
