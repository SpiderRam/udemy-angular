import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'blue';
  
  // This is just an option, you can use an alias here and wrap the selector in square brackets in the HTML
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // this is basically the same as the method in basic-highlight,
  // and it achieves the same thing as @HostListener below
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    // Running this onInit works fine, but isn't interactive, hence the HostListener technique below
    // You can pass a fourth argument here if you need to add flags, such as !important
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // If you are not using @HostBinding:
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // If you are not using @HostBinding:
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

    this.backgroundColor = this.defaultColor;
  }
}

// Info about Renderer2 can be found here:  https://angular.io/api/core/Renderer2
