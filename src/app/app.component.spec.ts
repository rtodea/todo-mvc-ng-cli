import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { TodoService } from './todo.service';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { FilterType, TodoFilterComponent } from './todo-filter/todo-filter.component';
import { StoreService } from './store.service';
import { TodoStoreService } from './todo-store.service';

class MockTodoService {
  activeFilter: FilterType;

  setFilter(filter: FilterType) {
    this.activeFilter = filter;
  }
}

describe('AppComponent', () => {
  let mockTodoService: MockTodoService;

  beforeEach(async(() => {
    mockTodoService = new MockTodoService();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoCreatorComponent,
        TodoListingComponent,
        TodoCounterComponent,
        TodoFilterComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: TodoService, useValue: mockTodoService },
        StoreService,
        TodoStoreService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('todos');
  }));

  it('should delegate to TodoService setting the filter', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.setFilter(FilterType.Completed);
    expect(mockTodoService.activeFilter).toBe(FilterType.Completed);
  }));
});
