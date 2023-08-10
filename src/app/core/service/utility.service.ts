import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

loadToken(){
    return localStorage.getItem('token') || '{}';
}

isConnect() {
    return localStorage.getItem('token') !== null;
}

saveToken(token: any): void {
    localStorage.setItem('token', token);
    var jwtHelper = new JwtHelperService();
    // this.roles = jwtHelper.decodeToken(token).roles;
}

getUserName() {
  let token = localStorage.getItem('token') || '{}';
  var jwtHelper = new JwtHelperService();
  return jwtHelper.decodeToken(token).sub;
}

deleteToken(){
    localStorage.removeItem('token');
}
}
