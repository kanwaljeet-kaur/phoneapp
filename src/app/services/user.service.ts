
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get<User[]>(this.baseURL);
  }

  addUser(user)
  { 
  
    return this._http.post<User>(this.baseURL,JSON.stringify(user),this.httpOptions);
  }
}