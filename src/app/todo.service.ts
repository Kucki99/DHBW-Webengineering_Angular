import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() { }

  public create(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  public get(todoId: number): Todo {
    return new Todo('foo');
  }

  public getAll(): Todo[] {
    return [
      new Todo('Wäsche waschen'),
      new Todo('Auto waschen')
    ];
  }

  public update(todo: Todo): void {

  }

  public delete(todoId: number): void {

  }
}
