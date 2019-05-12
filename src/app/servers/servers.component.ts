import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // This will work:
    this.router.navigate(['/servers'], {relativeTo: this.route});

    // And so will this:
    // this.router.navigate(['servers']);

    // But this will not:
    // this.router.navigate(['servers'], {relativeTo: this.route});

    // Relative vs. Absolute paths
  }

}
