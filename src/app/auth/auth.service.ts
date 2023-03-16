import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl= 'http://192.168.10.146:8001';

  constructor(private http: HttpClient) { }



  loginUserFromServer(user:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,user)
 
}
      
  registerUserFromServer(user :any):Observable<any>{ 
    return this.http.post<any>(`${this.baseUrl}/register`,user);
  }
}



