import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {



  url = "http://localhost/server.php";
  constructor(private http: Http) { }
 

  requestData(loginData)
  {
    return this.http.post(this.url, loginData);
  }
}
