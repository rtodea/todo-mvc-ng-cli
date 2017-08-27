import { Component } from '@angular/core';

import { TodoService } from './todo.service';
import { FilterType } from './todo-filter/todo-filter.component';
import { TodoStoreService } from './todo-store.service';

@Component({
  selector: 'tdm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoService: TodoService,
              private todoStoreService: TodoStoreService) {
    console.log('Loading todoStoreService with store key @', this.todoStoreService.TODO_STORE_KEY);
  }

  setFilter(filter: FilterType) {
    this.todoService.setFilter(filter);
  }
}
