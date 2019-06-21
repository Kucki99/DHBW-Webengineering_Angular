import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  httpCient: HttpClient;
  url = 'http://localhost:3000/todos';

  constructor(public http: HttpClient) {
  }

  public create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  public get(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(this.url + '?id=' + todoId);
  }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  public update(todo: Todo): Observable<void> {
    this.http.put(this.url, todo);
    return of();
  }

  public delete(todoId: number): Observable<void> {
    this.http.get(this.url + '?id=' + todoId);
    return of();
  }
}
