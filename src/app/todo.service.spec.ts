import { TestBed, inject } from '@angular/core/testing';

import { TodoService, TodoItem } from './todo.service';

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
        expect(todos[0].done).toEqual(false);

        done();
      });

      service.create(testTodo);
    })();
  });

  it('should destroy a Todo item based on id', (done) => {
    inject([TodoService], (service: TodoService) => {
      const testTodo = 'writing unit tests';

      service.todosObservable.subscribe((todos) => {
        if (todos.length === 0) {
          done();
        }
      });

      service.todosObservable.subscribe((todos) => {
        if (todos.length === 1) {
          service.destroy(todos[0].id);
        }
      });

      service.create(testTodo);
    })();
  });

  it('should have done flag when todo item is Done', () => {
    const todo = new TodoItem('stuff');
    expect(todo.done).toEqual(false);
    todo.done = true;
    expect(todo.done).toEqual(true);
  });

  it('should update a todo based on a payload', inject([TodoService], (service: TodoService) => {
    const todo = service.create('some todo');
    const newText = 'some other todo';
    service.update(todo.id, {text: newText});
    expect(todo.text).toEqual(newText);
  }));


  it('should load todos', (done) => {
    inject([TodoService], (service: TodoService) => {
      const todos = [
        new TodoItem('first'),
        new TodoItem('second'),
        new TodoItem('third'),
      ];

      service.todosObservable.subscribe((serviceTodos) => {
        expect(serviceTodos.length).toEqual(todos.length);
        done();
      });

      service.load(todos);
    })();
  });
});
