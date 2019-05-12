import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is default, None and Native are also options
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  // Content Child works like View Child, but for code within the <ng-content> element, when it is working
  // @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constructor called!")
   }

   // This is the only lifecycle hook which takes an argument
   ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!", changes);
   }

  ngOnInit() {
    console.log("ngOnInit called!");
    // @ContentChild can't be called here, it is too soon
  }

  // Gets called whenever angular checks for any changes
  // Good to use to manually initiate change detection
  ngDoCheck() {
    console.log("ngDoCheck called!");

  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    // Now is the time for @ContentChild:
    // console.log("Paragraph content: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
