import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from '../utility.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) {
    httpOptions.headers = httpOptions.headers.set('Authorization', "Bearer " + this.utilityService.loadToken())
   }

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/all', httpOptions);
  }
  getAllUsersAdmin():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/admins', httpOptions);
  }
  getAllUsersTeatcher():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/teatcher', httpOptions);
  }
  getAllUsersStudent():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/students', httpOptions);
  }
  changeUserStatus(idUser: number, status: string):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/status?idUser=' + idUser + '&status=' + status, httpOptions);
  }

  findUserByEmail(email: string):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/email?email=' + email, httpOptions);
  }
}
