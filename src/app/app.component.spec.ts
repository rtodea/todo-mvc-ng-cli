import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { TodoService } from './todo.service';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoCreatorComponent,
        TodoListingComponent,
        TodoCounterComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        TodoService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('todos');
  }));
});
