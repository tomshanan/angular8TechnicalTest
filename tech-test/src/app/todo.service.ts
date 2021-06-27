import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';
import {take} from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(
    private http: HttpClient
  ) { }

  updateTodo(todo:Todo) {
    const url = apiUrl + "/tasks/" + todo.id;
    this.http.patch(url, todo)
    .pipe(take(1))
    .toPromise()
    .then(()=>{
      const todos = this.todos$.value
      const todoIndex = todos.findIndex( v => v.id === todo.id)
      todos[todoIndex] = {...todo}
      this.todos$.next([...todos])
    })
  }

  createTodo(todo:Todo) {
    const url = apiUrl + "/tasks/";
    this.http.post(url, todo)
    .pipe(take(1))
    .toPromise()
    .then((newTodo:Todo)=>{
      const todos = this.todos$.value
      todos.unshift(newTodo)
      this.todos$.next(todos)
    })
  }

  deleteTodo(id: number) {
    const url = apiUrl + "/tasks/" + id;
    this.http.delete(url)
    .pipe(take(1))
    .toPromise()
    .then(()=>{
      const todos = this.todos$.value.filter(todo => todo.id !== id)
      this.todos$.next([...todos])
    })
  }

  getAll() {
    const url = apiUrl + "/tasks/";
    this.http.get(url)
    .pipe(take(1))
    .toPromise()
    .then((tasks: Todo[])=>{
      console.log(tasks)
      this.todos$.next(tasks)
    })
  }
}
