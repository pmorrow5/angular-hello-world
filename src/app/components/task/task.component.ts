import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks'
import {Task} from '../../Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
