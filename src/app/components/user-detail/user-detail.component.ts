import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  @Input() user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (!userId) return;

    this.userService.getUser(userId).subscribe((user) => {
      this.user = user;
    });
  }
}
