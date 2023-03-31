import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  private roles = {
    admin: [
      'home',
      'profile',
      'patients',
      'doctors',
      'appointments',
      'invoices',
      'settings',
      'logout',
    ],
    patient: [
      'home',
      'profile',
      'appointment',
      'invoice',
      'settings',
      'logout',
    ],
  };

  getPermissionsForRole(role: string): string[] {
    return this.roles[role] || [];
  }
}
