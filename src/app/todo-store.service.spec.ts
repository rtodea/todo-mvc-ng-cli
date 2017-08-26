import { TestBed, inject } from '@angular/core/testing';

import { TodoStoreService } from './todo-store.service';
import { TodoService } from './todo.service';
import { StoreService } from './store.service';

describe('TodoStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        StoreService,
        TodoStoreService,
      ]
    });
  });

  it('should be created', inject([TodoStoreService], (service: TodoStoreService) => {
    expect(service).toBeTruthy();
  }));
});
