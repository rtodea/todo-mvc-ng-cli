import { Component, OnInit } from '@angular/core';


export enum FILTER_TYPE {
  ALL,
  ACTIVE,
  COMPLETED,
}

export interface TodoFilter {
  isActive: boolean;
  label: string;
  type: FILTER_TYPE;
}

@Component({
  selector: 'tdm-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {
  filters: TodoFilter[] = [
    {
      label: 'Active',
      type: FILTER_TYPE.ACTIVE,
      isActive: false,
    },
    {
      label: 'Completed',
      type: FILTER_TYPE.COMPLETED,
      isActive: false,
    },
    {
      label: 'All',
      type: FILTER_TYPE.ALL,
      isActive: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  enableFilter(activeFilter) {
    this.filters.forEach((filter) => {
      filter.isActive = (filter.type === activeFilter.type);
    });
  }
}
