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

  it('should show 0 active todos', () => {
    expect(component.activeTodos).toEqual(0);
  });

  it('should show 1 active todos', () => {
    const todoService = TestBed.get(TodoService);
    todoService.create('todo test');
    expect(component.activeTodos).toEqual(1);
  });
});
