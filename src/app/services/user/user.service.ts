import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class UserService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  signUpUser(user:User){
    return this.httpClient.post(`${environment.baseUrl}/users`,user);
  }
}
