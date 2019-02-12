import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  mResponse = "";
  constructor(private loginServie: LoginService){};
  process(loginForm){
   
    var s = "{\"data\":[{\"username\":\"" + loginForm.value.username + "\",\"password\":\"" + loginForm.value.password + "\"}]}";   
   this.loginServie.login(s).subscribe(
     response => this.parseResponse(response),
     error => console.log("Error",error)
   );
   
   
  }

  parseResponse(response){
    console.log(response["_body"].toString().trim());
      if(response["_body"].toString().trim() == "YES")
      {
        console.log("Welcome");
      }
      else{
        console.log("Wrong User");
      }
     

  }
}
