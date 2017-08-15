import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdm-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  callToAction = 'What needs to be done?';

  constructor() { }

  ngOnInit() {
  }
}
