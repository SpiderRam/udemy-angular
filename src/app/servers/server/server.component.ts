import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Adding + before these two items ensures that they will be read as numbers
    // instead of strings, so that they match the ids from the array in servers.service.ts
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    // The above can be replaced by the resolver (Lecture 142): 
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    // Since we are already on this route, we only need 'edit' here, instead of: 
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
