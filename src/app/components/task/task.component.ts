import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
}
