// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-inactive-users',
//   templateUrl: './inactive-users.component.html',
//   styleUrls: ['./inactive-users.component.css']
// })
// export class InactiveUsersComponent {
//   @Input() users: string[];
//   @Output() userSetToActive = new EventEmitter<number>();

//   onSetToActive(id: number) {
//     this.userSetToActive.emit(id);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
