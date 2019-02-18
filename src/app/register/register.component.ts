import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public accountCreated:boolean = false;
  public usernameExists:boolean = false;
  constructor(private registerService : RegisterService) { }

  process(registerForm)
  {
    console.log(registerForm);

    //var s = "{\"data\":[{\"process\":\"register\",\"name\":\"" + registerForm.value.name + "\",\"username\":\"" + registerForm.value.username + "\",\"password\":\"" + registerForm.value.password + "\",\"emailId\":\"" + registerForm.value.email+ "\",\"cpassword\":\"" + registerForm.value.cpassword+ "\" }]}";   
    var q = {'data': { 
                      'process': 'register', 
                      'name': registerForm.value.name, 
                      'username': registerForm.value.username, 
                      'password': registerForm.value.password, 
                      'cpassword': registerForm.value.cpassword, 
                      'emailId':registerForm.value.email  
                      }
              }
    
this.registerService.register(JSON.stringify(q)).subscribe(
      response => this.parseResponse(response),
      error => console.log("Error")
    );

    console.log(registerForm.value); 
  }


  parseResponse(response){
    console.log(response["_body"].toString().trim());
      if(response["_body"].toString().trim() == "Account Created")
      {
        console.log("Welcome");
        this.accountCreated = true;
      }
      else if(response["_body"].toString().trim() == "Username Exists"){
        this.usernameExists = true;
        console.log("Hello?");
      }

}

}

