import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // optional (see app.component.html for paired code):
  // selector: '[app-servers]'
  // Or:
  // selector: '.app-servers' (this is good for styling)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServerTwo'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The name is: ' + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = event.target.value;
  // }
}
