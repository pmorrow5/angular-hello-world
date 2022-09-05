import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((showAddTask) => this.showForm = showAddTask);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    alert('Sumbitted!');

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
