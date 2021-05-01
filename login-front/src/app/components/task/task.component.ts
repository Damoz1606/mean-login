import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(){
    this.taskService.getTasks()
    .subscribe(
      res => { this.tasks = <any>res },
      error => { console.log(error) }
    );
  }

}
