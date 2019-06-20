import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest2]'
})
export class Test2Directive {

  constructor() { }

  @HostListener('click')
  onClick() {
    console.log('Clicked!');
  }

}
