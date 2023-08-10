import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../../classes/authUser';
import { Observable } from 'rxjs';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = environment.baseUrlApi

  constructor(private httpClient: HttpClient) { }

  signup(user: User):Observable<User>{
    return this.httpClient.post<User>(this.baseUrl + 'auth/register', user);
  }

  signin(authUser: AuthUser):Observable<string>{
    return this.httpClient.post<string>(this.baseUrl + 'auth/login', authUser);
  }
}
