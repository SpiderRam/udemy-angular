import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {

  showParagraph = true;
  testArray = [];
  number = 0;

  constructor() { }

  clickDetails() {
    this.showParagraph = !this.showParagraph;
    this.number++
    this.testArray.push(this.number);
  }

  ngOnInit() {
  }

}
