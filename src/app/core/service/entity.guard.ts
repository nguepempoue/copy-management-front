import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UtilityService } from "./utility.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class EntityGuard implements CanActivate{
      constructor(private utilityService: UtilityService, private router: Router){
      }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(!this.utilityService.isConnect()){
           this.router.navigateByUrl('/login');
           return false;
       }
       return true;
    }
  }