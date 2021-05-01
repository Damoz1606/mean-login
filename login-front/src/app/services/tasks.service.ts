import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  URL: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get(`${this.URL}/task`);
  }

  getPrivateTasks(){
    return this.http.get(`${this.URL}/private-task`);
  }
}
