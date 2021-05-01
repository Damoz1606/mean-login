import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(){
    this.taskService.getPrivateTasks()
    .subscribe(
      res => { this.tasks = <any>res },
      error => { console.log(error) }
    );
  }

}
