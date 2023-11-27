// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userRole: string = 'user'; // Set the default role

  setUserRole(role: string) {
    this.userRole = role;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
}
