import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  baseUrl= 'http://192.168.10.146:8001';

  constructor(private http: HttpClient) { }

  
  createRestaurant(user:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/restaurant/create-restaurant`,user)
 
}

createMenu(data: any): Observable<any>{
return this.http.post<any>(`${this.baseUrl}/dish/create-menu`, data)
}

getAllRestaurants(): Observable<any>{
return  this.http.get(`${this.baseUrl}/restaurant/get-Allrestaurants`)
}
}
