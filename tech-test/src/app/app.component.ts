import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$ = this.todoService.todos$.asObservable()
  newTodo:string;

  constructor(
    private todoService: TodoService
    ){
      this.todoService.getAll()
  }

  createTodo(todoText: string){
    if(todoText === '' && todoText == null) return;
    this.todoService.createTodo({
      id : null,
      label: null,
      description: todoText,
      category: null,
      done: null
    })
    this.newTodo = ''
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo.id)
  }

  updateTodo(todo:Todo){
    this.todoService.updateTodo(todo)
  }

  trackByFn(index,item){
    return item.id
  }
}
