import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  validUser : boolean = true ;
  loggedIn : boolean = false;
  mResponse = "";
  constructor(private loginServie: LoginService, private router: Router, private data: DataService){};
  process(loginForm){
   
   // var s = "{\"data\":[{\"process\":\"login\",\"username\":\"" + loginForm.value.username + "\",\"password\":\"" + loginForm.value.password + "\"}]}";   
    var q = {'data': { 'process': 'login', 'username': loginForm.value.username, 'password': loginForm.value.password  }}
    
    var z = JSON.stringify(q);
   this.loginServie.login(z).subscribe(
     response => this.parseResponse(response),
     error => console.log("Error",error)
   );
   
   
  }

  parseResponse(response){
    console.log(response["_body"].toString().trim());
    var responeObject = JSON.parse(response["_body"].toString().trim());
    console.log(responeObject);

      if(responeObject["valid"] == "YES")
      {
        console.log("Welcome");
        this.router.navigate(['welcome']);
        this.validUser = true;
        this.data.updateLoggedIn(true);
        this.data.userDetails(responeObject['username'], responeObject['name']);
      }
      else{
        console.log("Wrong User");
        this.data.updateLoggedIn(false);
        this.validUser = false;
      }
     

  }

  isLoggedIn(){
    return this.loggedIn;
  }

}
