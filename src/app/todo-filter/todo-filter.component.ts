import { Component, OnInit } from '@angular/core';


export type FilterType = 'all' | 'active' | 'completed';

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
      type: 'active' as FilterType,
      isActive: false,
    },
    {
      label: 'Completed',
      type: 'completed' as FilterType,
      isActive: false,
    },
    {
      label: 'All',
      type: 'all' as FilterType,
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
