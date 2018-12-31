// ***************************************
// This method is not considered best practice,
// because it can create errors if the code is not running in the dom.
// See better-highlight for alternative method
// ***************************************

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // The square brackets here identify this as an attribute, 
    // so it will be applied when added to an element
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    // private makes this both a property of this class and 
    // automatically assign this value of this property

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}