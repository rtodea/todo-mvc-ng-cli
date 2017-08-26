import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCounterComponent } from './todo-counter.component';
import { TodoService } from '../todo.service';

describe('TodoCounterComponent', () => {
  let component: TodoCounterComponent;
  let fixture: ComponentFixture<TodoCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCounterComponent ],
        providers: [
          TodoService,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show 0 active todos when no todos', () => {
    expect(component.activeTodos).toEqual(0);
  });

  it('should show 1 active todos for a newly created todo', () => {
    const todoService = TestBed.get(TodoService);
    todoService.create('todo test with default active state');
    expect(component.activeTodos).toEqual(1);
  });

  it('should update the counter based on active state', () => {
    const todoService = TestBed.get(TodoService);
    const todoItem = todoService.create('todo test');
    expect(component.activeTodos).toEqual(1);
    todoService.update(todoItem.id, {done: true});
    expect(component.activeTodos).toEqual(0);
  });
});
