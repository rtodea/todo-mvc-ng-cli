import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreatorComponent,
    TodoListingComponent,
    TodoCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
