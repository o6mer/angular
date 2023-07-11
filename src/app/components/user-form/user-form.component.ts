import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  id!: number;
  private isEdit: boolean = false;

  constructor(
    private userService: UserService,
    private rotuer: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) return;
    this.userService.getUser(userId).subscribe((user) => {
      const { name, email, password } = user;
      this.name = name;
      this.email = email;
      this.password = password;
      this.id = Number(userId);
      this.isEdit = true;
    });
  }

  submitHandler() {
    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    if (this.isEdit) {
      this.userService.updateUser({ ...user, id: this.id }).subscribe(() => {
        alert('saved');
        this.rotuer.navigate(['/users']);
      });
    } else {
      this.userService.addUser(user).subscribe(() => {
        alert('saved');
        this.rotuer.navigate(['/users']);
      });
    }

    this.name = '';
    this.email = '';
    this.password = '';
  }
}
