import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }

  resetUsername = function() {
    this.username = '';
  };

}
