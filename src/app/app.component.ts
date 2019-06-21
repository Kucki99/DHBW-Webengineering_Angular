import { Component, InjectionToken, NgModule, Inject } from '@angular/core';
import { APP_NAME } from './appName';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todoApp';
  value = 'Hello!';
  color = 'pink';
  exampleNumber = 5.3156;
  myTodo: Todo = {
    done: false,
    name: 'Wash clothes',
    id: 1
  };
  show: boolean;
  todos: Todo[];

  constructor(@Inject(APP_NAME) name: string, todoService: TodoService) {
    todoService.getAll().subscribe(todos => this.todos = todos);
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

  /*
  toggle() {
    this.show = !this.show;
  }
  */
}
