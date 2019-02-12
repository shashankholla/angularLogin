import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost/server.php";
  constructor(private http: Http) { }


  login(loginData)
  {
    return this.http.post(this.url, loginData);
  }
}
