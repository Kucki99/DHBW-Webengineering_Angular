import { Component, InjectionToken, NgModule, Inject } from '@angular/core';
import { APP_NAME } from './appName';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Neues Todo';
  value = 'Hello!';
  color = 'pink';
  exampleNumber = 5.3156;
  myTodo: Todo = {
    done: false,
    name: 'Wash clothes',
    id: 1
  };
  show: boolean;
  todos$: Observable<Todo[]>;
  todoService: TodoService;

  constructor(@Inject(APP_NAME) name: string, todoService: TodoService) {
    this.todos$ = todoService.getAll();
    this.todoService = todoService;
  }

  onClick({ x, y }: MouseEvent) {
    console.log(`X: ${x}, Y: ${y}`);
  }

  onDone(event: any) {
    console.log(event);
  }

  onMouseMove() {
    const rnd1 = Math.round(Math.random() * 255);
    const rnd2 = Math.round(Math.random() * 255);
    const rnd3 = Math.round(Math.random() * 255);
    this.color = `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
  }

  onSubmit(): void {
    this.todos$ = this.todoService.create(new Todo(this.title)).pipe(
      switchMap(() => this.todoService.getAll())
    );
  }

  /*
  toggle() {
    this.show = !this.show;
  }
  */
}
