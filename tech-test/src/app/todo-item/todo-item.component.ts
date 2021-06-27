import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() todo: Todo;

  @Output('update') updateEvent = new EventEmitter<Todo>()
  @Output('remove') removeEvent = new EventEmitter<Todo>()

  editMode: boolean = false
  updating: boolean = false;
  todoInput: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.todo){
      this.updating = false;
    }
  }

  ngOnInit() {
  }

  edit(){
    this.editMode = true
    this.todoInput = this.todo.description
  }

  confirm(){
    this.editMode = false
    this.updating = true;
    this.todo = {...this.todo, description: this.todoInput}
    this.updateEvent.emit(this.todo)
  }

  cancel(){
    this.editMode = false
  }

  remove(){
    this.updating = true;
    this.removeEvent.emit(this.todo)
  }

  onCheck(){
    this.todo = {
      ...this.todo,
      done: !this.todo.done ? 'date' : null
    }
    this.updateEvent.emit(this.todo)
  }
}
