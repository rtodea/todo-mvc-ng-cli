import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as uuid from 'uuid';

export type TodoItemStatus = 'active' | 'done';

export const TodoItemActive = 'active' as TodoItemStatus;

export const TodoItemDone = 'done' as TodoItemStatus;


export interface TodoItem {
  id: string;
  text: string;
  status: TodoItemStatus;
}

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [];

  private todos$ = new Subject<TodoItem[]>();

  todosObservable = this.todos$.asObservable();

  constructor() { }

  create(todoText: string) {
    const todoItem = {
      id: this.generateUniqueId(),
      text: todoText,
      status: TodoItemActive,
    };

    this.todos.push(todoItem);
    this.todos$.next(this.todos);
  }

  delete(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.todos$.next(this.todos);
  }

  private generateUniqueId() {
    return uuid.v4().replace(/-/g, '');
  }
}
