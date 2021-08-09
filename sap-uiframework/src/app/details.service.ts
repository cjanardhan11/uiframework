import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/users/getUser';

  getdetais(){
     return this.http.get(this.url);
   }
  
   title = "SAP Framework - Sample UI/UX";
 
}
