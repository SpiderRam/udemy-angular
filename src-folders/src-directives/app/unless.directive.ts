// This is a custom structural directive, which provides an alternative to using
// <ng-template> in app.component.html

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // set implements a setter and turns this property into a method,
  // which gets executed whenever the property changes, aka whenever
  // the condition we pass changes
  // it must take as an argument the value the property would get
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
