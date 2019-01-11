import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  // params is an Observable, which allows you to create a response to 
  // something which has not yet occurred (asynchronous).

  // .subscribe() takes three functions as arguments
  // The first is fired whenever new data is sent through the observable,
  // in this case allowing <a [routerLink]="['/users', 10, 'Anna']">Load Anna (10)</a>
  // to reinstantiate the page
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  //==============================================
  // This works at first but it breaks when you need to change the data again from within,
  // Such as clicking this when already at and endpoint with a user and id:
  // <a [routerLink]="['/users', 10, 'Anna']">Load Anna (10)</a>
  //==============================================
  
  // ngOnInit() {
  //   this.user = {
  //     id: this.route.snapshot.params['id'],
  //     name: this.route.snapshot.params['name']
  //   };
  // }

}
