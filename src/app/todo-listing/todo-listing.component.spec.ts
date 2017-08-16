import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListingComponent } from './todo-listing.component';
import { TodoItem, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

describe('TodoListingComponent', () => {
  let component: TodoListingComponent;
  let fixture: ComponentFixture<TodoListingComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListingComponent ],
      providers: [TodoService],
      imports: [FormsModule]
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

  it('should have only one item in edit mode', () => {
    const mockTodos = [new TodoItem('first'), new TodoItem('second')];
    component.todos = mockTodos;

    component.setEditMode(mockTodos[0]);
    expect(component.isInEditMode(mockTodos[0])).toEqual(true);

    component.setEditMode(mockTodos[1]);
    expect(component.isInEditMode(mockTodos[0])).toEqual(false);
    expect(component.isInEditMode(mockTodos[1])).toEqual(true);
  });

  it('should forget one item in edit mode', () => {
    const todo = new TodoItem('first');
    component.todos = [todo];

    component.setEditMode(todo);
    expect(component.isInEditMode(todo)).toEqual(true);

    component.exitEditMode();
    expect(component.isInEditMode(todo)).toEqual(false);
  });
});
