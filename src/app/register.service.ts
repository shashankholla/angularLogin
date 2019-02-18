import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost/server.php";
  constructor(private http: Http) { }


  register(loginData)
  {
    return this.http.post(this.url, loginData);
  }
}
