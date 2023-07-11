import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(user: User) {
    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }
}
