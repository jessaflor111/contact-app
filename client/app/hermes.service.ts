import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HermesService {
  constructor(public http: HttpClient, private router: Router) {}

}
