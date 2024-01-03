import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { LoginResponse } from '../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  loginUser(user:User){
    return this.httpClient.post<LoginResponse>(`${environment.baseUrl}/auth/login`,user);
  }
}
