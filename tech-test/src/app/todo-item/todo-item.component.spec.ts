import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a todo and an input and display it\'s description in the dom', () => {
    /* TODO: 
      create component
      pass in todo as input
      expect the dom to display the description
    */
  });
  it('should emit an update event with new "done" state when clicking on the todo checkbox ', () => {
    /* TODO: 
      create component
      pass in todo as input with done: false
      change the checkbox checked value to true
      expect an event to emit from updateEvent with a Todo and the new done: true
    */
  });
  it('should emit an update event with a new "description" when clicking on the confirm button ', () => {
    /* TODO: 
      create component
      pass in todo as input
      change the editMode to true
      change the value of the todo input
      trigger click on the confirm button
      expect an event to emit from updateEvent with a Todo with the new string in description
    */
  });
  it('should update the "updating" flag when a new todo is passed in ', () => {
    /* TODO: 
      create component
      pass in todo as input
      change the "updating" property to true
      pass in a todo as input
      expect updating to be false again
    */
  });
});
