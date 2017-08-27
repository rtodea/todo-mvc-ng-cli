import { Component } from '@angular/core';

import { TodoService } from './todo.service';
import { FilterType } from './todo-filter/todo-filter.component';

@Component({
  selector: 'tdm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoService: TodoService) {
  }

  setFilter(filter: FilterType) {
    this.todoService.setFilter(filter);
  }
}
