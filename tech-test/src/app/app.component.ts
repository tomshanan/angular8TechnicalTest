import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounce, debounceTime, startWith } from 'rxjs/operators';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allTodos: Todo[];
  filteredTodos: Todo[];

  filterString: string = '';
  filterStringChange = new Subject<void>()

  newTodo: string;

  /* TODO: unsubscribe all subs on destroy [TS 27/06/21] */

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    this.todoService.todos$.subscribe((todos)=> {
      this.allTodos = todos;
      // resets filter
      this.filterString = '';
      this.filteredTodos = this.allTodos
    })

    this.filterStringChange
    .pipe(
      debounceTime(300)
    ).subscribe(() => {
      this.filterTodos()
    })
    this.todoService.getAllTodos()
  }

  filterTodos() {
    let normalisedString = this.filterString != null ? this.filterString.toLowerCase().trim() : "";
    if (normalisedString != '') {
      this.filteredTodos = this.allTodos.filter(todo => {
        return todo.description.toLowerCase().trim().includes(normalisedString)
      })
    } else {
      this.filteredTodos = this.allTodos
    }
  }

  createTodo(todoText: string) {
    if (todoText === '' && todoText == null) return;
    this.todoService.createTodo({
      id: null,
      label: null,
      description: todoText,
      category: null,
      done: null
    })
    this.newTodo = ''
  }


  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo)
  }

  /**
   * provides a trackBy function to the ngFor in the template, 
   * which should identify the items by their ID
 */
  trackByFn(index, item) {
    return item.id
  }
}
