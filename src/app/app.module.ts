import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { StoreService } from './store.service';
import { TodoStoreService } from './todo-store.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreatorComponent,
    TodoListingComponent,
    TodoCounterComponent,
    TodoFilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoService,
    StoreService,
    TodoStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
