import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor(public ViewContainerRef: ViewContainerRef) { }

}
