import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl= 'http://54.156.63.145:8085/user';

  constructor(private http: HttpClient) { }



  loginUserFromServer(user:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/signin`,user)
 
}
      
  registerUserFromServer(user :any):Observable<any>{ 
    return this.http.post<any>(`${this.baseUrl}/register`,user);
  }
}



