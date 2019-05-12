import { Component } from '@angular/core';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  // styleUrls: ['./task-four.component.css']
})
export class TaskFourComponent {
  // serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

}
