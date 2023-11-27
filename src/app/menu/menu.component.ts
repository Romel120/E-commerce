// header.component.ts

import { Component } from '@angular/core';
import { UserService } from '../services/user.service'; // Adjust the path

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isAdmin: boolean = false;

  constructor(private userService: UserService) {
    // Assuming authService has a method to check the user's role
    this.isAdmin = userService.isAdmin();
  }
}
