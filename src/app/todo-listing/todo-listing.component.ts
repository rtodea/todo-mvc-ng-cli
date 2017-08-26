import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'tdm-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.css']
})
export class TodoListingComponent implements OnInit, OnDestroy {
  private todoInEditMode: string;

  private subscriptions: Subscription[] = [];

  todos: TodoItem[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.todoService.todosObservable.subscribe((todos) => {
      this.todos = todos;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  destroy(todo) {
    this.todoService.destroy(todo.id);
  }

  isInEditMode(todo) {
    return todo.id === this.todoInEditMode;
  }

  setEditMode(todo) {
    this.todoInEditMode = todo.id;
  }

  exitEditMode() {
    this.todoInEditMode = null;
  }

  toggleDone(todo) {
    this.todoService.update(todo.id, { done: !todo.done });
  }

  setText(todo, newText) {
    this.todoService.update(todo.id, { text: newText });
  }
}
