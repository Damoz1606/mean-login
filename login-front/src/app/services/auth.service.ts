import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = "http://localhost:3000/api";
  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User){
    return this.http.post<any>(`${this.URL}/signup`, user);
  }

  signIn(user: User){
    return this.http.post<any>(`${this.URL}/signin`, user);
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
