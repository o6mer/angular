import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user!: User;

  @Output() onDelete: EventEmitter<User> = new EventEmitter();

  handleDelete() {
    this.onDelete.emit(this.user);
  }
}
