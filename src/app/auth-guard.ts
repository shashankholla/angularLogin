import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { DataService } from "./data.service";

@Injectable()
export class authGuard implements CanActivate{

    constructor(private data : DataService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
       
        return this.data.loggedIn;
        
    }
}