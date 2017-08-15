import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListingComponent } from './todo-listing.component';
import { TodoService } from '../todo.service';

describe('TodoListingComponent', () => {
  let component: TodoListingComponent;
  let fixture: ComponentFixture<TodoListingComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListingComponent ],
      providers: [TodoService],
    })
    .compileComponents();

    todoService = TestBed.get(TodoService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the todos from the service', (done) => {
    const testTodo = 'test todos';
    todoService.todosObservable.subscribe((todos) => {
      expect(todos).toEqual(component.todos);

      done();
    });

    todoService.create(testTodo);
  });
});
