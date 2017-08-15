import { TestBed, inject } from '@angular/core/testing';

import { TodoService, TodoItemActive } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a Todo item', (done) => {
    inject([TodoService], (service: TodoService) => {
      const testTodo = 'writing unit tests';

      service.todosObservable.subscribe((todos) => {
        expect(todos.length).toEqual(1);

        expect(todos[0].id.length).toEqual(32); // unique id of length 32
        expect(todos[0].text).toEqual(testTodo);
        expect(todos[0].status).toEqual(TodoItemActive);

        done();
      });

      service.create(testTodo);
    })();
  });

  it('should delete a Todo item based on id', (done) => {
    inject([TodoService], (service: TodoService) => {
      const testTodo = 'writing unit tests';

      service.todosObservable.subscribe((todos) => {
        if (todos.length === 0) {
          done();
        }
      });

      service.todosObservable.subscribe((todos) => {
        if (todos.length === 1) {
          service.delete(todos[0].id);
        }
      });

      service.create(testTodo);
    })();
  });
});
