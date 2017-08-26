import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatorComponent } from './todo-creator.component';
import { TodoService } from '../todo.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoCreatorComponent', () => {
  let component: TodoCreatorComponent;
  let fixture: ComponentFixture<TodoCreatorComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreatorComponent ],
      providers: [ TodoService ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    todoService = TestBed.get(TodoService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct question', () => {
    expect(component.callToAction).toEqual('What needs to be done?');
  });

  it('should call the service when creating a todo', () => {

  });
});
