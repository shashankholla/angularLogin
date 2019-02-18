import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RequestService } from '../request.service';
import { request } from 'http';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  mName : String;
  mUsername : String;
  temp : Number;
  humidity: Number;
  waterLevel: Number;
  soilMoisture: Number;
  lastUpdate : String;
  constructor(private data: DataService, private request: RequestService ) {}
  ngOnInit() {
    this.mName = this.data.name;
    this.mUsername = this.data.username;

    var s = { 'data' : {
                       'process': 'data', 
                        'username' : this.mUsername
                        }
              }

    this.request.requestData(JSON.stringify(s)).subscribe(
      response => this.parseResponse(response),
      error => console.log(error)
      
      );

     

  }
  parseResponse(response){
    var responeObject = JSON.parse(response["_body"].toString().trim());
    this.temp = responeObject['temp'];
    this.humidity = responeObject['humidity'];
    this.waterLevel = responeObject['waterLevel'];
    this.soilMoisture = responeObject['soilMoisture'];
    this.lastUpdate = responeObject['dateTime'];
  }

}
