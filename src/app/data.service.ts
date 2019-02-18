import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  loggedIn: boolean;
  username: String;
  name: String;
  
  constructor() { }
  updateLoggedIn(x)
  {
    this.loggedIn = x;
  }
  userDetails(mUsername, mName)
  {
    this.username = mUsername;
    this.name = mName;
  }

}
