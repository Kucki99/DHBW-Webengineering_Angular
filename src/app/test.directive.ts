import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() { }

  @Input()
  @HostBinding('style.backgroundColor')
  appTest: String;

}
