// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-active-users',
//   templateUrl: './active-users.component.html',
//   styleUrls: ['./active-users.component.css']
// })
// export class ActiveUsersComponent {
//   @Input() users: string[];
//   @Output() userSetToInactive = new EventEmitter<number>();

//   onSetToInactive(id: number) {
//     this.userSetToInactive.emit(id);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}

