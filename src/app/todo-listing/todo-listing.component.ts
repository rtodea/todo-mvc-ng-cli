import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'tdm-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.css']
})
export class TodoListingComponent implements OnInit {
  private todoInEditMode: string;

  todos: TodoItem[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.todosObservable.subscribe((todos) => {
      this.todos = todos;
    });
  }

  delete(todo) {
    this.todoService.delete(todo.id);
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
}
