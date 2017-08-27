import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as R from 'ramda';

import { FilterType, TodoFilterComponent } from './todo-filter.component';


describe('TodoFilterComponent', () => {
  let component: TodoFilterComponent;
  let fixture: ComponentFixture<TodoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 types of filters', () => {
    expect(component.filters.length).toBe(3);
  });

  it('should have "all" filter enabled by default', () => {
    const activeFilters = component.filters.filter((filter) => filter.isActive);
    expect(activeFilters.length).toEqual(1);
    expect(activeFilters[0].type).toEqual(FilterType.All);
  });

  it('should set only one active filter', () => {
    const [[completedFilter], otherFilters] = R.partition((filter) => filter.type === FilterType.Completed, component.filters);
    expect(completedFilter.isActive).toBe(false);
    component.setFilter(completedFilter);
    expect(completedFilter.isActive).toBe(true);
    expect(otherFilters.every((filter) => filter.isActive)).toBe(false);
  });

  it('should emit a filter event when setting the current filter', () => {
    // I am using both approaches for the sake of documenting them
    component.filterUpdated.subscribe((filter: FilterType) => {
      expect(filter).toEqual(FilterType.Completed);
    });

    spyOn(component.filterUpdated, 'emit');
    component.setFilter({ isActive: false, type: FilterType.Completed, label: 'Completed' });
    expect(component.filterUpdated.emit).toHaveBeenCalledWith(FilterType.Completed);
  });
});
