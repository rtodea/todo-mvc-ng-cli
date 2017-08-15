import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as uuid from 'uuid';

export type TodoItemStatus = 'active' | 'done';

export const TodoItemActive = 'active' as TodoItemStatus;

export const TodoItemDone = 'done' as TodoItemStatus;

export class TodoItem implements TodoItem {
  id: string;
  text: string;
  status: TodoItemStatus;

  constructor(todoText) {
    this.id = this.generateUniqueId();
    this.text = todoText;
    this.status = TodoItemActive;
  }

  private generateUniqueId() {
    return uuid.v4().replace(/-/g, '');
  }

  get done() {
    return this.status === TodoItemDone;
  }

  set done(doneFlag: boolean) {
    if (doneFlag) {
      this.status = TodoItemDone;
    } else {
      this.status = TodoItemActive;
    }
  }
}

export interface TodoItem {
  id: string;
  text: string;
  status: TodoItemStatus;
  done: boolean;
}

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [];

  private todos$ = new Subject<TodoItem[]>();

  todosObservable = this.todos$.asObservable();

  constructor() { }

  create(todoText: string) {
    const todoItem = new TodoItem(todoText);

    this.todos.push(todoItem);
    this.todos$.next(this.todos);
  }

  delete(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.todos$.next(this.todos);
  }
}
