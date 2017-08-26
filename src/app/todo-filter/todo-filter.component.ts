import { Component, OnInit } from '@angular/core';


export enum FilterType {
  All,
  Active,
  Completed,
}

export interface TodoFilter {
  isActive: boolean;
  label: string;
  type: FilterType;
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
      type: FilterType.Active,
      isActive: false,
    },
    {
      label: 'Completed',
      type: FilterType.Completed,
      isActive: false,
    },
    {
      label: 'All',
      type: FilterType.All,
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
