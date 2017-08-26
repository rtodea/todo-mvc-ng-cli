import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as uuid from 'uuid';
import { TodoFilter } from './todo-filter/todo-filter.component';
import { StoreService } from "./store.service";

export class TodoItem implements TodoItem {

  id: string;
  text: string;
  done: boolean;

  constructor(todoText) {
    this.id = this.generateUniqueId();
    this.text = todoText;
    this.done = false;
  }

  private generateUniqueId() {
    return uuid.v4().replace(new RegExp('-', 'g'), '');
  }
}

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

export interface UploadTodoItem {
  text?: string;
  done?: boolean;
}

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [];

  private todosById = new Map<string, TodoItem>();

  private todos$ = new Subject<TodoItem[]>();

  todosObservable = this.todos$.asObservable();

  load(todos) {
    this.todos = todos;
    todos.forEach((todo) => {
      this.todosById.set(todo.id, todo);
    });

    this.todos$.next(todos);
  }

  constructor() {
  }

  create(todoText: string) {
    const todoItem = new TodoItem(todoText);

    this.todos.push(todoItem);
    this.todosById.set(todoItem.id, todoItem);
    this.todos$.next(this.todos);

    return todoItem;
  }

  destroy(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.todosById.delete(todoId);
    this.todos$.next(this.todos);
  }

  update(todoId: string, payload: UploadTodoItem) {
    const foundTodo = this.todosById.get(todoId);
    Object.assign(foundTodo, payload);
    this.todos$.next(this.todos);
  }
}
