import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  @Input('todo') // [todo]=
  todo;

  @HostBinding('class.done')
  doneState = false;

  /*
  @Output('done') // (done)=
  done = new EventEmitter<any>();
  */

  ngOnInit() {
  }

  @HostListener('click')
  onHostClick() {
    this.doneState = !this.doneState;
  }

  onDone() {
  }

}
