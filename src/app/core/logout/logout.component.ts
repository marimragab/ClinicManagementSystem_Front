import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(event: MouseEvent) {
    event.preventDefault();
    this.router.navigateByUrl('/login');
    this.authService.removeLocalStorageToken();
    this.authService.setLoggedIn(false);
  }
}
